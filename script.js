const DATA = {
  1: {
    titulo: "O SCFV e os sistemas de gestão",
    crumb: "Aula 1",
    meta: "≈ 2h · 6 tópicos",
    descricao: "Nesta aula você vai entender o funcionamento do Serviço de Convivência e Fortalecimento de Vínculos (SCFV) e os principais sistemas usados para geri-lo nos municípios — o SISC e o Gessuas.",
    material: "Material_Didatico_Aula1.docx",
    videoId: "TigiJFunIsk",
    resumo: [
      "O SCFV é um serviço da Proteção Social Básica, vinculado ao CRAS, guiado pelos eixos de convivência social, direito de ser e participação.",
      "O atendimento prioriza o público em maior vulnerabilidade, respeitando o mínimo de 50% das vagas.",
      "O SISC monitora as metas do SCFV; seu preenchimento correto garante o cofinanciamento federal.",
      "O Gessuas é outro sistema usado por municípios, com desafios de usabilidade na rotina dos técnicos.",
      "Benefícios eventuais atendem vulnerabilidades temporárias, conforme a regulamentação local."
    ],
    topicos: [
      {t:"00:00", nome:"O que é o SCFV", desc:"Conceito, vínculo ao CRAS e objetivos gerais."},
      {t:"10:13", nome:"Público prioritário e ciclos de vida", desc:"Faixas etárias e como o serviço é ofertado."},
      {t:"26:36", nome:"O sistema SISC: prazos e cadastro", desc:"Preenchimento, prazos e cofinanciamento."},
      {t:"59:26", nome:"SISC: relatórios e vigilância", desc:"Relatórios de usuários ativos."},
      {t:"1:09:30", nome:"Gessuas e benefícios eventuais", desc:"Fluxo do sistema e benefícios eventuais."},
      {t:"1:25:04", nome:"Boas práticas de gestão", desc:"Grupos e mapeamento de vulnerabilidades."}
    ]
  },
  2: {
    titulo: "Atendimento no Domicílio, RMA e CRAS",
    crumb: "Aula 2",
    meta: "≈ 2h · 8 tópicos",
    descricao: "Nesta aula você vai conhecer o Atendimento no Domicílio e o PDU, entender o RMA e explorar como um sistema de gestão do CRAS organiza prontuários, atendimentos e os grupos do SCFV.",
    material: "Material_Didatico_Aula2.docx",
    videoId: "SEU_ID_YOUTUBE_AULA_2",
    resumo: [
      "O atendimento no domicílio garante acesso à assistência social para pessoas com mobilidade reduzida, planejado através do PDU.",
      "O RMA é o sistema federal de registro mensal de atendimentos, cujos dados influenciam o cofinanciamento.",
      "Sistemas de gestão do CRAS organizam prontuários e histórico de atendimentos com controle de sigilo.",
      "A composição familiar e os endereços precisam de um cadastro flexível e sempre atualizado.",
      "A gestão do SCFV envolve grupos, vagas, listas de espera e frequência dos participantes."
    ],
    topicos: [
      {t:"00:00", nome:"Atendimento no Domicílio e o PDU", desc:"Conceito, público-alvo e o Plano de Desenvolvimento do Usuário."},
      {t:"14:51", nome:"O Registro Mensal de Atendimento", desc:"Preenchimento e validações do RMA."},
      {t:"25:13", nome:"Prontuário eletrônico", desc:"Histórico de atendimentos e controle de sigilo."},
      {t:"42:24", nome:"Fluxo de atendimento", desc:"Registro de procedimentos técnicos."},
      {t:"59:34", nome:"Composição familiar e endereços", desc:"Cadastro de família e situação de rua."},
      {t:"1:14:14", nome:"Acompanhamento intersetorial", desc:"Diagnóstico e evolução da família."},
      {t:"1:27:49", nome:"Gestão do SCFV", desc:"Grupos, vagas e listas de espera."},
      {t:"1:44:29", nome:"Agendamento e frequência", desc:"Agenda de encontros e controle de presença."}
    ]
  }
};

// ---------- Player do YouTube (permite pular para o minuto exato) ----------
let player;
let pendingVideoId = null;

// Chamada automaticamente pela API do YouTube quando ela termina de carregar
function onYouTubeIframeAPIReady(){
  player = new YT.Player('yt-player', {
    height: '100%',
    width: '100%',
    videoId: DATA[1].videoId,
    playerVars: {
      rel: 0,
      modestbranding: 1,
      origin: window.location.origin
    },
    events: {
      onReady: () => {
        if (pendingVideoId) {
          player.loadVideoById(pendingVideoId);
          pendingVideoId = null;
        }
      }
    }
  });
}

function timeToSeconds(t){
  const parts = t.split(':').map(Number);
  if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
  return parts[0]*60 + parts[1];
}

// Chamada ao clicar num tópico na barra lateral
function seekPlayerTo(t){
  const secs = timeToSeconds(t);
  if (player && typeof player.seekTo === 'function') {
    player.seekTo(secs, true);
    player.playVideo();
  }
}

// Chamada ao trocar de aula (troca o vídeo carregado no player)
function loadPlayerVideo(videoId){
  if (player && typeof player.loadVideoById === 'function') {
    player.loadVideoById(videoId);
  } else {
    pendingVideoId = videoId;
  }
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
  const d = DATA[id];
  document.getElementById('aula-titulo').textContent = d.titulo;
  document.getElementById('aula-crumb').textContent = d.crumb;
  document.getElementById('aula-meta').innerHTML = '<span>' + d.meta.split(' · ')[0] + '</span><span>' + d.meta.split(' · ')[1] + '</span>';
  document.getElementById('aula-descricao').textContent = d.descricao;
  document.getElementById('material-nome').textContent = d.material;

  // Troca o vídeo do player para o da aula selecionada
  loadPlayerVideo(d.videoId);

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
    item.addEventListener('click', () => {
      document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('is-active'));
      item.classList.add('is-active');
      seekPlayerTo(topico.t);
    });
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

let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').textContent = msg;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}
document.getElementById('btn-download').addEventListener('click', () => showToast('Isso baixaria o arquivo real na versão final.'));

function renderInlineTopics(id){
  const container = document.getElementById('topics-inline-' + id);
  if(!container || container.dataset.rendered) return;
  container.dataset.rendered = '1';
  DATA[id].topicos.forEach(topico => {
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