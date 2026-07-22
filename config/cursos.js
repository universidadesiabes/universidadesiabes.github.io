// Fonte única de dados dos cursos da Universidade SUAS.
// Depois de subir o vídeo no Google Drive, troque driveFileId pelo ID do arquivo
// (Compartilhar → Qualquer pessoa com o link → "Ver" → copiar o trecho entre /d/ e /view).
// Depois de exportar o material em PDF, coloque o arquivo em ./pdf com o mesmo nome usado em "pdf".
const cursos = [
  {
    id: 1,
    titulo: "O SCFV e os sistemas de gestão",
    crumb: "Aula 1",
    meta: "≈ 2h · 6 tópicos",
    descricao: "Nesta aula você vai entender o funcionamento do Serviço de Convivência e Fortalecimento de Vínculos (SCFV) e os principais sistemas usados para geri-lo nos municípios — o SISC e o Gessuas.",
    material: "Material_Didatico_Aula1.pdf",
    pdf: "./pdf/Material_Didatico_Aula1.pdf",
    driveFileId: "SEU_ID_DRIVE_AULA_1",
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
  {
    id: 2,
    titulo: "Atendimento no Domicílio, RMA e CRAS",
    crumb: "Aula 2",
    meta: "≈ 2h · 8 tópicos",
    descricao: "Nesta aula você vai conhecer o Atendimento no Domicílio e o PDU, entender o RMA e explorar como um sistema de gestão do CRAS organiza prontuários, atendimentos e os grupos do SCFV.",
    material: "Material_Didatico_Aula2.pdf",
    pdf: "./pdf/Material_Didatico_Aula2.pdf",
    driveFileId: "SEU_ID_DRIVE_AULA_2",
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
];
