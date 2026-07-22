function timeToSeconds(t){
  const parts = t.split(':').map(Number);
  if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
  return parts[0]*60 + parts[1];
}

function driveEmbedUrl(fileId){
  return 'https://drive.google.com/file/d/' + fileId + '/preview';
}

// Troca o vídeo carregado no player ao trocar de aula.
function loadPlayerVideo(driveFileId){
  document.getElementById('drive-player').src = driveEmbedUrl(driveFileId);
}

// O player embutido do Google Drive não expõe uma API para pular para um
// timestamp (diferente do player do YouTube). Por isso, ao clicar num tópico
// apenas destacamos o item ativo — o timestamp fica visível para o usuário
// buscar manualmente na barra do vídeo.
function highlightTopic(item){
  document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('is-active'));
  item.classList.add('is-active');
}

function showView(name){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
  document.getElementById('view-' + name).classList.add('is-active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('is-active'));
  const navLink = document.querySelector('.nav-link[data-nav="' + name + '"]');
  if(navLink) navLink.classList.add('is-active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function loadAula(id){
  const d = cursos.find(c => c.id === Number(id));
  document.getElementById('aula-titulo').textContent = d.titulo;
  document.getElementById('aula-crumb').textContent = d.crumb;
  document.getElementById('aula-meta').innerHTML = '<span>' + d.meta.split(' · ')[0] + '</span><span>' + d.meta.split(' · ')[1] + '</span>';
  document.getElementById('aula-descricao').textContent = d.descricao;
  document.getElementById('material-nome').textContent = d.material;
  document.getElementById('btn-download').setAttribute('href', d.pdf);

  loadPlayerVideo(d.driveFileId);

  const resumoEl = document.getElementById('aula-resumo');
  resumoEl.innerHTML = '';
  d.resumo.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    resumoEl.appendChild(li);
  });

  const listEl = document.getElementById('topic-list');
  listEl.innerHTML = '';
  d.topicos.forEach((topico, i) => {
    const item = document.createElement('div');
    item.className = 'topic-item' + (i === 0 ? ' is-active' : '');
    item.innerHTML = '<div class="topic-time">' + topico.t + '</div><div class="topic-text"><b>' + topico.nome + '</b><span>' + topico.desc + '</span></div>';
    item.addEventListener('click', () => highlightTopic(item));
    listEl.appendChild(item);
  });

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
  document.querySelector('.tab[data-tab="sobre"]').classList.add('is-active');
  document.querySelectorAll('.tabpanel').forEach(p => p.classList.remove('is-active'));
  document.querySelector('.tabpanel[data-panel="sobre"]').classList.add('is-active');
}

document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = el.getAttribute('data-nav');
    if(target === 'aula'){
      loadAula(el.getAttribute('data-aula'));
    }
    showView(target);
  });
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    document.querySelectorAll('.tabpanel').forEach(p => p.classList.remove('is-active'));
    document.querySelector('.tabpanel[data-panel="' + tab.getAttribute('data-tab') + '"]').classList.add('is-active');
  });
});

function renderInlineTopics(id){
  const container = document.getElementById('topics-inline-' + id);
  if(!container || container.dataset.rendered) return;
  container.dataset.rendered = '1';
  cursos.find(c => c.id === Number(id)).topicos.forEach(topico => {
    const row = document.createElement('div');
    row.className = 'topics-inline-row';
    row.innerHTML = '<div class="topics-inline-time">' + topico.t + '</div><div class="topics-inline-name">' + topico.nome + '</div>';
    container.appendChild(row);
  });
}

document.querySelectorAll('[data-toggle-topics]').forEach(btn => {
  const id = btn.getAttribute('data-toggle-topics');
  btn.addEventListener('click', () => {
    renderInlineTopics(id);
    const container = document.getElementById('topics-inline-' + id);
    const isOpen = container.classList.toggle('is-open');
    btn.classList.toggle('is-open', isOpen);
    btn.firstChild.textContent = isOpen ? 'Ocultar os tópicos desta aula' : 'Ver os tópicos desta aula';
  });
});

loadAula(1);
