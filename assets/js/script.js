const PROGRESSO_KEY = 'suas_progresso_aulas';
let aulaAtualId = null;

function findAula(id){
  const numId = Number(id);
  for (const modulo of modulos) {
    const aula = modulo.aulas.find(a => a.id === numId);
    if (aula) return { aula, modulo };
  }
  return null;
}

function todasAulasEmOrdem(){
  return modulos.flatMap(m => m.aulas);
}

// ---- Progresso (persistido no localStorage do navegador) ----
// Abrir o index.html direto do disco (file://) ou embutido num iframe sem
// "allow-same-origin" (caso do Lumio) faz o navegador tratar a página como
// origem opaca, e localStorage lança SecurityError. Detecta isso uma vez e
// cai para um fallback em memória (progresso funciona só durante a sessão).
const progressoStorage = (() => {
  try {
    const testKey = '__suas_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return window.localStorage;
  } catch (e) {
    const memoria = {};
    return {
      getItem: (key) => (key in memoria ? memoria[key] : null),
      setItem: (key, valor) => { memoria[key] = valor; }
    };
  }
})();

function getProgresso(){
  try {
    return new Set(JSON.parse(progressoStorage.getItem(PROGRESSO_KEY)) || []);
  } catch (e) {
    return new Set();
  }
}
function salvarProgresso(set){
  progressoStorage.setItem(PROGRESSO_KEY, JSON.stringify([...set]));
}
function isAulaConcluida(id){
  return getProgresso().has(Number(id));
}
function toggleAulaConcluida(id){
  const set = getProgresso();
  const numId = Number(id);
  if (set.has(numId)) set.delete(numId); else set.add(numId);
  salvarProgresso(set);
}
function calcularProgressoModulo(modulo){
  const set = getProgresso();
  const concluidas = modulo.aulas.filter(a => set.has(a.id)).length;
  const total = modulo.aulas.length;
  return { concluidas, total, pct: total ? Math.round((concluidas / total) * 100) : 0 };
}
function calcularProgressoGeral(){
  const set = getProgresso();
  const total = modulos.reduce((s, m) => s + m.aulas.length, 0);
  const concluidas = modulos.reduce((s, m) => s + m.aulas.filter(a => set.has(a.id)).length, 0);
  return { concluidas, total, pct: total ? Math.round((concluidas / total) * 100) : 0 };
}
function proximaAulaDoModulo(modulo){
  const set = getProgresso();
  return modulo.aulas.find(a => !set.has(a.id)) || modulo.aulas[0];
}
function atualizarNavProgresso(){
  const el = document.getElementById('nav-progresso');
  if (!el) return;
  el.textContent = 'Progresso · ' + calcularProgressoGeral().pct + '%';
}

// ---- Quiz (Atividade) por aula — resultado persistido no mesmo esquema de storage ----
const QUIZ_KEY = 'suas_quiz_resultados';
function getQuizResultados(){
  try {
    return JSON.parse(progressoStorage.getItem(QUIZ_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function salvarQuizResultado(aulaId, acertos, total){
  const resultados = getQuizResultados();
  resultados[aulaId] = { acertos, total };
  progressoStorage.setItem(QUIZ_KEY, JSON.stringify(resultados));
}
function calcularQuizGeral(){
  const resultados = getQuizResultados();
  const total = modulos.reduce((s, m) => s + m.aulas.length, 0);
  return { feitas: Object.keys(resultados).length, total };
}

function renderQuiz(aula){
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  aula.quiz.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    const opcoesHtml = q.opcoes.map((op, oi) =>
      '<label class="quiz-opcao"><input type="radio" name="quiz-' + aula.id + '-' + qi + '" value="' + oi + '"><span>' + op + '</span></label>'
    ).join('');
    qDiv.innerHTML = '<p class="quiz-pergunta">' + (qi + 1) + '. ' + q.pergunta + '</p><div class="quiz-opcoes">' + opcoesHtml + '</div>';
    container.appendChild(qDiv);
  });

  document.getElementById('btn-corrigir-quiz').hidden = false;
  document.getElementById('btn-refazer-quiz').hidden = true;

  const resultadoEl = document.getElementById('quiz-resultado');
  resultadoEl.classList.remove('is-aviso');
  const salvo = getQuizResultados()[aula.id];
  if (salvo) {
    resultadoEl.hidden = false;
    resultadoEl.textContent = 'Última tentativa: ' + salvo.acertos + ' de ' + salvo.total + ' corretas.';
  } else {
    resultadoEl.hidden = true;
    resultadoEl.textContent = '';
  }
}

function corrigirQuiz(){
  if (aulaAtualId == null) return;
  const found = findAula(aulaAtualId);
  if (!found) return;
  const { aula } = found;
  const perguntas = document.querySelectorAll('#quiz-container .quiz-question');
  const resultadoEl = document.getElementById('quiz-resultado');

  const todasRespondidas = Array.from(perguntas).every(qDiv => qDiv.querySelector('input[type="radio"]:checked'));
  if (!todasRespondidas) {
    resultadoEl.hidden = false;
    resultadoEl.classList.add('is-aviso');
    resultadoEl.textContent = 'Responda todas as perguntas antes de corrigir.';
    return;
  }
  resultadoEl.classList.remove('is-aviso');

  let acertos = 0;
  perguntas.forEach((qDiv, qi) => {
    const q = aula.quiz[qi];
    const checked = qDiv.querySelector('input[type="radio"]:checked');
    const escolhida = Number(checked.value);
    if (escolhida === q.correta) acertos++;
    qDiv.querySelectorAll('.quiz-opcao').forEach((opEl, oi) => {
      if (oi === q.correta) opEl.classList.add('is-correct');
      else if (oi === escolhida) opEl.classList.add('is-wrong');
      opEl.querySelector('input').disabled = true;
    });
  });

  const total = perguntas.length;
  resultadoEl.hidden = false;
  resultadoEl.textContent = 'Você acertou ' + acertos + ' de ' + total + ' perguntas.';
  document.getElementById('btn-corrigir-quiz').hidden = true;
  document.getElementById('btn-refazer-quiz').hidden = false;

  salvarQuizResultado(aula.id, acertos, total);
}

function refazerQuiz(){
  if (aulaAtualId == null) return;
  const found = findAula(aulaAtualId);
  if (found) renderQuiz(found.aula);
}

function driveEmbedUrl(fileId){
  return 'https://drive.google.com/file/d/' + fileId + '/preview';
}

// Troca o vídeo carregado no player ao trocar de aula.
function loadPlayerVideo(driveFileId){
  document.getElementById('drive-player').src = driveEmbedUrl(driveFileId);
}

function showView(name){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
  document.getElementById('view-' + name).classList.add('is-active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('is-active'));
  const navLink = document.querySelector('.nav-link[data-nav="' + name + '"]');
  if (navLink) navLink.classList.add('is-active');

  if (name === 'home') renderHome();
  if (name === 'trilha') renderTrilha();
  if (name === 'progresso') renderProgresso();

  window.scrollTo({top:0, behavior:'smooth'});
}

// Lista as aulas irmãs (mesmo módulo) no side-panel, com check nas concluídas.
function renderSidePanel(modulo, aula){
  document.getElementById('side-panel-title').textContent = modulo.titulo + ' · outras aulas';
  const listEl = document.getElementById('topic-list');
  listEl.innerHTML = '';
  modulo.aulas.forEach((irma, i) => {
    const done = isAulaConcluida(irma.id);
    const item = document.createElement('div');
    item.className = 'topic-item' + (irma.id === aula.id ? ' is-active' : '') + (done ? ' is-done' : '');
    item.innerHTML = '<div class="topic-time">' + (done ? '✓' : String(i + 1).padStart(2, '0')) + '</div><div class="topic-text"><b>' + irma.titulo + '</b><span>' + irma.curta + '</span></div>';
    item.addEventListener('click', () => loadAula(irma.id));
    listEl.appendChild(item);
  });
}

function atualizarBotaoConcluida(id){
  const done = isAulaConcluida(id);
  document.getElementById('btn-concluida').classList.toggle('is-done', done);
  document.getElementById('btn-concluida-label').textContent = done ? 'Concluída' : 'Marcar como concluída';
}

function loadAula(id){
  const found = findAula(id);
  if (!found) return;
  const { aula, modulo } = found;
  aulaAtualId = aula.id;
  const posicao = modulo.aulas.findIndex(a => a.id === aula.id) + 1;

  document.getElementById('aula-titulo').textContent = aula.titulo;
  document.getElementById('aula-crumb').textContent = modulo.titulo + ' · ' + aula.titulo;
  document.getElementById('aula-meta').innerHTML = '<span>' + modulo.titulo + '</span><span>Aula ' + posicao + ' de ' + modulo.aulas.length + '</span>';
  document.getElementById('aula-descricao').textContent = aula.desc;
  document.getElementById('btn-download').setAttribute('href', aula.pdf);

  loadPlayerVideo(aula.driveFileId);
  atualizarBotaoConcluida(aula.id);

  const resumoEl = document.getElementById('aula-resumo');
  resumoEl.innerHTML = '';
  aula.resumo.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    resumoEl.appendChild(li);
  });

  renderSidePanel(modulo, aula);
  renderQuiz(aula);

  const todas = todasAulasEmOrdem();
  const proxima = todas[todas.findIndex(a => a.id === aula.id) + 1];
  const btnProxima = document.getElementById('btn-proxima-aula');
  if (proxima) {
    btnProxima.hidden = false;
    btnProxima.setAttribute('data-aula', proxima.id);
  } else {
    btnProxima.hidden = true;
  }

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
  document.querySelector('.tab[data-tab="sobre"]').classList.add('is-active');
  document.querySelectorAll('.tabpanel').forEach(p => p.classList.remove('is-active'));
  document.querySelector('.tabpanel[data-panel="sobre"]').classList.add('is-active');
}

// ---- Home: 1 card de preview por módulo ----
function renderHome(){
  const container = document.getElementById('cards-row');
  container.innerHTML = '';
  modulos.forEach(modulo => {
    const { concluidas } = calcularProgressoModulo(modulo);
    const proxima = proximaAulaDoModulo(modulo);
    const [duracao, qtdAulas] = modulo.meta.split(' · ');
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-accent', modulo.accent);
    card.innerHTML =
      '<span class="course-tag">' + modulo.titulo + '</span>' +
      '<h3>' + modulo.tema + '</h3>' +
      '<p>' + modulo.descricao + '</p>' +
      '<div class="course-meta"><span>' + duracao + '</span><span>' + qtdAulas + '</span></div>' +
      '<button class="btn-mini" data-nav="aula" data-aula="' + proxima.id + '">' + (concluidas > 0 ? 'Continuar' : 'Assistir agora') +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>';
    container.appendChild(card);
  });
}

// ---- Trilha: 1 nó por módulo, com progresso real e as aulas do módulo dentro do accordion ----
function renderTrilha(){
  const container = document.getElementById('trail-modules');
  container.innerHTML = '';
  modulos.forEach(modulo => {
    const { concluidas, total, pct } = calcularProgressoModulo(modulo);
    const proxima = proximaAulaDoModulo(modulo);
    const statusTexto = pct === 100 ? 'concluído' : pct === 0 ? 'não iniciado' : pct + '% concluído';
    const node = document.createElement('div');
    node.className = 'trail-node';
    node.setAttribute('data-accent', modulo.accent);
    node.innerHTML =
      '<div class="trail-marker"><div class="trail-dot"></div></div>' +
      '<div class="trail-card">' +
        '<div class="trail-eyebrow">' + modulo.titulo + '</div>' +
        '<h3>' + modulo.tema + '</h3>' +
        '<p>' + modulo.descricao + '</p>' +
        '<div class="trail-progress"><div style="width:' + pct + '%"></div></div>' +
        '<div class="trail-footer">' +
          '<span class="trail-meta">' + concluidas + ' de ' + total + ' aulas · ' + statusTexto + '</span>' +
          '<button class="btn-mini" style="color:var(--' + modulo.accent + ');font-weight:700;font-size:14px;" data-nav="aula" data-aula="' + proxima.id + '">' + (concluidas > 0 ? 'Continuar' : 'Começar') + ' →</button>' +
        '</div>' +
        '<button class="topics-toggle" data-toggle-topics="' + modulo.id + '">' +
          'Ver as aulas deste módulo' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<div class="topics-inline" id="topics-inline-' + modulo.id + '"></div>' +
      '</div>';
    container.appendChild(node);
  });
}

function renderInlineAulas(moduloId){
  const container = document.getElementById('topics-inline-' + moduloId);
  if (!container) return;
  container.dataset.rendered = '1';
  container.innerHTML = '';
  const modulo = modulos.find(m => m.id === Number(moduloId));
  modulo.aulas.forEach((aula, i) => {
    const done = isAulaConcluida(aula.id);
    const row = document.createElement('div');
    row.className = 'topics-inline-row' + (done ? ' is-done' : '');
    row.setAttribute('data-nav', 'aula');
    row.setAttribute('data-aula', aula.id);
    row.style.cursor = 'pointer';
    row.innerHTML = '<div class="topics-inline-time">' + (done ? '✓' : String(i + 1).padStart(2, '0')) + '</div><div class="topics-inline-name">' + aula.titulo + '</div>';
    container.appendChild(row);
  });
}

// ---- Progresso: painel geral + detalhe por módulo ----
function renderProgresso(){
  const geral = calcularProgressoGeral();
  document.getElementById('progresso-total-pct').textContent = geral.pct + '%';
  document.getElementById('progresso-total-label').textContent = geral.concluidas + ' de ' + geral.total + ' aulas concluídas';
  document.getElementById('progresso-total-bar').style.width = geral.pct + '%';
  const quizGeral = calcularQuizGeral();
  document.getElementById('progresso-quiz-info').textContent = quizGeral.feitas + ' de ' + quizGeral.total + ' aulas com atividade feita';

  const container = document.getElementById('progresso-modulos');
  container.innerHTML = '';
  modulos.forEach(modulo => {
    const { concluidas, total, pct } = calcularProgressoModulo(modulo);
    const card = document.createElement('div');
    card.className = 'progresso-modulo-card';
    card.innerHTML =
      '<h3>' + modulo.titulo + ' — ' + modulo.tema + '</h3>' +
      '<span class="trail-meta">' + concluidas + ' de ' + total + ' aulas concluídas</span>' +
      '<div class="trail-progress"><div style="width:' + pct + '%"></div></div>';
    container.appendChild(card);
  });
}

// Delegação de clique: cobre elementos criados dinamicamente (cards, nós da
// trilha e aulas do accordion), sem depender da ordem em que foram renderizados.
document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    e.preventDefault();
    const target = navEl.getAttribute('data-nav');
    if (target === 'aula') {
      loadAula(navEl.getAttribute('data-aula'));
    }
    showView(target);
    return;
  }

  const toggleBtn = e.target.closest('[data-toggle-topics]');
  if (toggleBtn) {
    const id = toggleBtn.getAttribute('data-toggle-topics');
    const container = document.getElementById('topics-inline-' + id);
    const isOpen = !container.classList.contains('is-open');
    if (isOpen) renderInlineAulas(id);
    container.classList.toggle('is-open', isOpen);
    toggleBtn.classList.toggle('is-open', isOpen);
    toggleBtn.firstChild.textContent = isOpen ? 'Ocultar as aulas deste módulo' : 'Ver as aulas deste módulo';
    return;
  }

  const completeBtn = e.target.closest('[data-toggle-complete]');
  if (completeBtn) {
    if (aulaAtualId != null) {
      toggleAulaConcluida(aulaAtualId);
      atualizarBotaoConcluida(aulaAtualId);
      const found = findAula(aulaAtualId);
      if (found) renderSidePanel(found.modulo, found.aula);
      atualizarNavProgresso();
    }
    return;
  }

  const corrigirBtn = e.target.closest('[data-quiz-corrigir]');
  if (corrigirBtn) {
    corrigirQuiz();
    return;
  }

  const refazerBtn = e.target.closest('[data-quiz-refazer]');
  if (refazerBtn) {
    refazerQuiz();
    return;
  }

  const resetBtn = e.target.closest('[data-reset-progresso]');
  if (resetBtn) {
    e.preventDefault();
    if (confirm('Zerar todo o progresso salvo neste navegador?')) {
      salvarProgresso(new Set());
      atualizarNavProgresso();
      renderProgresso();
      if (aulaAtualId != null) atualizarBotaoConcluida(aulaAtualId);
    }
    return;
  }

  const tab = e.target.closest('.tab');
  if (tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    document.querySelectorAll('.tabpanel').forEach(p => p.classList.remove('is-active'));
    document.querySelector('.tabpanel[data-panel="' + tab.getAttribute('data-tab') + '"]').classList.add('is-active');
  }
});

renderHome();
renderTrilha();
loadAula(1);
atualizarNavProgresso();
