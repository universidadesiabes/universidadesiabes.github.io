// Fonte única de dados dos módulos/aulas da Universidade SIABES.
// Cada aula = 1 vídeo curto (um tópico do módulo). Depois de subir o clipe
// no Google Drive, troque driveFileId pelo ID do arquivo
// (Compartilhar → Qualquer pessoa com o link → "Ver" → copiar o trecho entre /d/ e /view).
// Os arquivos locais correspondentes estão em:
// Documents\Projeto Universidade\video aulas\cortados\modulo-1\ e \modulo-2\
// "desc" e "resumo" de cada aula vêm do material didático em pdf/ (um por tópico).
const modulos = [
  {
    id: 1,
    titulo: "Módulo 1",
    accent: "gold",
    tema: "O SCFV e os sistemas de gestão",
    descricao: "Nesta trilha você vai entender o funcionamento do Serviço de Convivência e Fortalecimento de Vínculos (SCFV) e os principais sistemas usados para geri-lo nos municípios — o SISC e o Gessuas.",
    meta: "2h · 6 aulas",
    aulas: [
      {
        id: 1,
        titulo: "O que é o SCFV",
        curta: "Conceito, vínculo ao CRAS e objetivos gerais.",
        desc: "O Serviço de Convivência e Fortalecimento de Vínculos (SCFV) é um serviço da Proteção Social Básica do SUAS, oferecido em grupos, com o objetivo de prevenir riscos e vulnerabilidades sociais. Ele funciona como um complemento ao trabalho social realizado com as famílias.",
        driveFileId: "SEU_ID_DRIVE_1_1",
        pdf: "./pdf/modulo-1/01-o-que-e-o-scfv.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 109/2009 (Tipificação Nacional de Serviços Socioassistenciais)", nota: "Tipifica o SCFV como serviço de Proteção Social Básica, definindo objetivos, público e resultados esperados em âmbito nacional." },
          { norma: "Resolução CNAS nº 1/2013", nota: "Reordena o SCFV, unificando os critérios de cofinanciamento federal e os parâmetros mínimos de funcionamento do serviço." }
        ],
        quiz: [
          { pergunta: "Que tipo de parceiro pode executar o SCFV junto com o CRAS?", opcoes: ["Uma Organização da Sociedade Civil (OSC)", "Uma empresa privada com fins lucrativos", "O CREAS", "O Conselho Tutelar"], correta: 0 },
          { pergunta: "Qual desses NÃO é um dos eixos norteadores do SCFV?", opcoes: ["Convivência social", "Direito de ser", "Participação", "Alta complexidade"], correta: 3 }
        ],
        resumo: [
          "O SCFV deve estar sempre vinculado a um CRAS, seja executado diretamente por ele ou por uma Organização da Sociedade Civil (OSC) parceira.",
          "Pela Resolução do Conselho Nacional nº 13, o serviço é voltado à faixa etária de 18 a 59 anos, com foco em segurança do convívio, prevenção do isolamento e fortalecimento de vínculos familiares e comunitários.",
          "Outros objetivos importantes do serviço são o estímulo à autonomia e ao protagonismo dos usuários."
        ]
      },
      {
        id: 2,
        titulo: "Público prioritário e ciclos de vida",
        curta: "Faixas etárias e como o serviço é ofertado.",
        desc: "O SCFV organiza suas atividades de acordo com a faixa etária dos usuários e prioriza o atendimento de pessoas em maior situação de vulnerabilidade.",
        driveFileId: "SEU_ID_DRIVE_1_2",
        pdf: "./pdf/modulo-1/02-publico-prioritario-e-ciclos-de-vida.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 1/2013", nota: "Define o público prioritário do SCFV e a organização das atividades por ciclo de vida, com meta mínima de vagas para esse público." },
          { norma: "Lei nº 8.069/1990 (ECA) e Lei nº 10.741/2003 (Estatuto do Idoso)", nota: "Fundamentam a atenção diferenciada por faixa etária nos grupos do serviço, da infância à terceira idade." }
        ],
        quiz: [
          { pergunta: "Qual o percentual mínimo de vagas do SCFV que deve ser destinado ao público prioritário?", opcoes: ["25%", "50%", "75%", "100%"], correta: 1 },
          { pergunta: "Qual sistema acompanha o cumprimento da meta de vagas para o público prioritário?", opcoes: ["RMA", "Gessuas", "SISC", "CadÚnico"], correta: 2 },
          { pergunta: "Qual a frequência mínima recomendada de encontros do SCFV?", opcoes: ["Um encontro mensal", "Um encontro semanal de 1 hora", "Dois encontros semanais de duas horas", "Encontros diários de 30 minutos"], correta: 2 }
        ],
        resumo: [
          "O planejamento pedagógico varia por ciclo de vida: 0-6 anos, 6-15 anos, 15-17 anos, 18-59 anos e 60 anos ou mais — cada um com foco específico de desenvolvimento.",
          "O público prioritário inclui beneficiários do Bolsa Família e do BPC, além de pessoas em situação de violação de direitos ou isolamento social.",
          "No mínimo 50% das vagas devem ser destinadas a esse público prioritário — meta acompanhada pelo sistema SISC.",
          "O serviço é contínuo, sem data fixa de início ou término; todo desligamento precisa ser registrado com o motivo.",
          "A frequência mínima recomendada é de dois encontros semanais, com duração de duas horas cada."
        ]
      },
      {
        id: 3,
        titulo: "O sistema SISC: prazos e cadastro",
        curta: "Preenchimento, prazos e cofinanciamento.",
        desc: "O SISC (Sistema de Informações do SCFV) é o sistema oficial usado para monitorar o cumprimento das metas do SCFV pelos municípios. O correto preenchimento dele impacta diretamente o repasse de cofinanciamento federal.",
        driveFileId: "SEU_ID_DRIVE_1_3",
        pdf: "./pdf/modulo-1/03-o-sistema-sisc-prazos-e-cadastro.pdf",
        baseLegal: [
          { norma: "Portaria MDS nº 134/2013", nota: "Institui o SISC como instrumento de gestão do SCFV para fins de acompanhamento e cofinanciamento federal." },
          { norma: "Portaria MDS nº 1.176/2026", nota: "Atualiza os critérios de cofinanciamento vinculados ao correto preenchimento do sistema pelos municípios." }
        ],
        quiz: [
          { pergunta: "O que acontece se o município perder o prazo de lançamento no SISC?", opcoes: ["Nada, pode lançar depois normalmente", "O repasse de cofinanciamento pode ser suspenso, sem recuperação retroativa", "Apenas recebe um aviso por e-mail", "O prazo se estende automaticamente por mais 30 dias"], correta: 1 },
          { pergunta: "Existe integração automática entre o SISC e o RMA?", opcoes: ["Sim, totalmente automática", "Sim, mas só para dados de famílias prioritárias", "Não — as equipes precisam repetir o trabalho manualmente em mais de uma plataforma", "Não existe RMA, apenas o SISC"], correta: 2 }
        ],
        resumo: [
          "O SISC é a ferramenta obrigatória para o registro da frequência dos usuários e o acompanhamento da execução do serviço.",
          "O repasse do cofinanciamento federal é calculado com base no número de usuários ativos devidamente registrados no SISC.",
          "A Portaria MDS nº 1.176/2026 exige atualização rigorosa dos dados pelos municípios.",
          "O sistema possui janelas trimestrais de preenchimento; perder o prazo pode suspender o repasse, sem recuperação retroativa.",
          "Não existe integração automática entre o SISC, o RMA e outros sistemas do MDS — o que exige repetir o trabalho manualmente em mais de uma plataforma."
        ]
      },
      {
        id: 4,
        titulo: "SISC: relatórios e vigilância",
        curta: "Relatórios de usuários ativos.",
        desc: "Além do cadastro, o SISC oferece relatórios que apoiam a vigilância socioassistencial do município a entender o cenário real de atendimento.",
        driveFileId: "SEU_ID_DRIVE_1_4",
        pdf: "./pdf/modulo-1/04-sisc-relatorios-e-vigilancia.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 33/2012 (NOB-SUAS)", nota: "Estabelece a vigilância socioassistencial como função de gestão do SUAS, responsável por produzir e analisar informações territoriais." },
          { norma: "Resolução CNAS nº 145/2004 (PNAS)", nota: "Origem do conceito de vigilância socioassistencial retomado pelos relatórios do SISC." }
        ],
        quiz: [
          { pergunta: "Por que o SISC não deve ser usado para contabilizar atividades esportivas avulsas sem vínculo pedagógico?", opcoes: ["Porque é proibido por lei federal específica", "Porque isso distorce os indicadores de vigilância socioassistencial", "Porque o sistema trava com esse tipo de dado", "Porque essas atividades já são registradas automaticamente pelo RMA"], correta: 1 },
          { pergunta: "Os relatórios do SISC segmentam usuários por quais critérios, segundo o material?", opcoes: ["Apenas por sexo e idade", "Público prioritário e faixa etária", "Apenas por unidade do CRAS", "Renda familiar e escolaridade"], correta: 1 }
        ],
        resumo: [
          "O sistema permite exportar tabelas e gerar relatórios de usuários ativos, segmentados por público prioritário e faixa etária.",
          "As confirmações de participação atualizam percentuais em tempo real, mas registros incompletos prejudicam a leitura real da situação do município.",
          "O SISC não deve ser usado para contabilizar atividades fora do escopo do SCFV — isso distorce os indicadores.",
          "O uso dos relatórios pela vigilância socioassistencial varia de município para município."
        ]
      },
      {
        id: 5,
        titulo: "Gessuas e benefícios eventuais",
        curta: "Fluxo do sistema e benefícios eventuais.",
        desc: "O Gessuas é outro sistema usado por municípios para gestão da assistência social. Este tópico também aborda o funcionamento dos benefícios eventuais dentro da política de assistência social.",
        driveFileId: "SEU_ID_DRIVE_1_5",
        pdf: "./pdf/modulo-1/05-gessuas-e-beneficios-eventuais.pdf",
        baseLegal: [
          { norma: "Lei nº 8.742/1993 (LOAS), art. 22", nota: "Institui os benefícios eventuais como provisões suplementares e provisórias da assistência social." },
          { norma: "Decreto nº 6.307/2007", nota: "Regulamenta os benefícios eventuais, incluindo o prazo de até seis meses para vulnerabilidades temporárias." }
        ],
        quiz: [
          { pergunta: "Qual crítica o material faz ao sistema Gessuas?", opcoes: ["Ele não permite cadastro de famílias", "Seu fluxo de trabalho é fragmentado, exigindo navegar por várias abas para tarefas simples", "Ele substitui completamente o SISC", "Ele só funciona offline"], correta: 1 },
          { pergunta: "Por quanto tempo, no máximo, um benefício eventual responde a uma vulnerabilidade temporária?", opcoes: ["Até 1 mês", "Até 3 meses", "Até 6 meses", "Por tempo indeterminado"], correta: 2 }
        ],
        resumo: [
          "O Gessuas costuma apresentar um fluxo de trabalho fragmentado, exigindo navegar por várias abas para concluir tarefas simples.",
          "Essa complexidade tende a gerar retrabalho e desmotivação nas equipes técnicas.",
          "Benefícios eventuais devem estar integrados aos atendimentos socioassistenciais e respondem a vulnerabilidades temporárias, com duração de até seis meses.",
          "A forma de concessão varia por município, podendo ser em pecúnia (dinheiro) ou em materiais."
        ]
      },
      {
        id: 6,
        titulo: "Boas práticas de gestão",
        curta: "Grupos e mapeamento de vulnerabilidades.",
        desc: "Este tópico reúne boas práticas para a organização de grupos do SCFV e para o mapeamento de vulnerabilidades das famílias atendidas, independente do sistema utilizado pelo município.",
        driveFileId: "SEU_ID_DRIVE_1_6",
        pdf: "./pdf/modulo-1/06-boas-praticas-de-gestao.pdf",
        baseLegal: [
          { norma: "Lei nº 13.709/2018 (LGPD)", nota: "Respalda o uso do CPF como identificador e o tratamento dos dados pessoais das famílias atendidas." },
          { norma: "Resolução CFESS nº 273/1993 (Código de Ética do/a Assistente Social)", nota: "Orienta o sigilo profissional no registro de vulnerabilidades e diagnósticos das famílias." }
        ],
        quiz: [
          { pergunta: "Qual identificador o material recomenda usar como principal das famílias, para evitar duplicidade de cadastro?", opcoes: ["O NIS", "O nome completo", "O CPF", "O número do Cadastro Único"], correta: 2 },
          { pergunta: "Qual é a carga horária normativa das oficinas do SCFV por encontro?", opcoes: ["30 minutos", "1 hora", "1h30", "3 horas"], correta: 2 },
          { pergunta: "Quais status um diagnóstico de vulnerabilidade pode ter, segundo o material?", opcoes: ["Aberto, fechado, arquivado", "Confirmado, em análise, superado", "Urgente, moderado, leve", "Pendente, aprovado, reprovado"], correta: 1 }
        ],
        resumo: [
          "Usar o CPF como identificador principal das famílias ajuda a evitar duplicidade de cadastros.",
          "Organizar os grupos entre ativos e inativos, diferenciando grupos de acompanhamento de grupos de oficina, facilita a gestão.",
          "A carga horária normativa das oficinas do SCFV é de 1h30 por encontro.",
          "No mapeamento de vulnerabilidades, é importante acompanhar o status de cada diagnóstico e vincular planos de ação.",
          "Uma vulnerabilidade identificada em uma pessoa pode afetar toda a família — a intervenção deve ser intersetorial.",
          "Famílias e pessoas em situação de rua também precisam ter suas vulnerabilidades registradas."
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Módulo 2",
    accent: "olive",
    tema: "Atendimento no Domicílio, RMA e CRAS",
    descricao: "Nesta trilha você vai conhecer o Atendimento no Domicílio e o PDU, entender o RMA e explorar como um sistema de gestão do CRAS organiza prontuários, atendimentos e os grupos do SCFV.",
    meta: "2h · 8 aulas",
    aulas: [
      {
        id: 7,
        titulo: "Atendimento no Domicílio e o PDU",
        curta: "Conceito, público-alvo e o Plano de Desenvolvimento do Usuário.",
        desc: "O atendimento no domicílio é um serviço que garante o acesso à assistência social para pessoas que não conseguem se deslocar até o CRAS. Este tópico apresenta o conceito do serviço e o instrumento usado para planejá-lo, o PDU.",
        driveFileId: "SEU_ID_DRIVE_2_1",
        pdf: "./pdf/modulo-2/01-atendimento-no-domicilio-e-o-pdu.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 109/2009 (Tipificação Nacional de Serviços Socioassistenciais)", nota: "Tipifica o Serviço de Proteção Social Básica no Domicílio para pessoas idosas e com deficiência." }
        ],
        quiz: [
          { pergunta: "Qual é o instrumento central de planejamento do Atendimento no Domicílio?", opcoes: ["O RMA", "O PDU (Plano de Desenvolvimento do Usuário)", "O PAIF", "O Censo SUAS"], correta: 1 },
          { pergunta: "Qual a capacidade de atendimento por equipe, segundo o material?", opcoes: ["Até 5 usuários", "Até 20 usuários", "Até 50 usuários", "Não há limite definido"], correta: 1 },
          { pergunta: "Qual a principal diferença entre o Atendimento no Domicílio e o SCFV?", opcoes: ["O SCFV é pago e o Atendimento no Domicílio é gratuito", "O Atendimento no Domicílio foca no indivíduo; o SCFV, na coletividade", "O SCFV é só para idosos; o Atendimento no Domicílio, para crianças", "Não há diferença, são o mesmo serviço"], correta: 1 }
        ],
        resumo: [
          "A finalidade do serviço é prevenir situações de risco, exclusão e isolamento social, levando o atendimento a quem não consegue acessar o CRAS fisicamente.",
          "O público-alvo são pessoas idosas e com deficiência com mobilidade reduzida, ou com barreiras geográficas e sociais de acesso.",
          "O PDU (Plano de Desenvolvimento do Usuário) é o instrumento central de planejamento do serviço, construído de forma participativa entre equipe técnica, usuário e família.",
          "A capacidade de atendimento por equipe costuma ser de até 20 usuários.",
          "É importante não confundir o atendimento no domicílio com o SCFV: um foca no indivíduo, o outro na coletividade."
        ]
      },
      {
        id: 8,
        titulo: "O Registro Mensal de Atendimento",
        curta: "Preenchimento e validações do RMA.",
        desc: "O RMA é o sistema oficial do governo federal usado para registrar mensalmente os dados de atendimento dos equipamentos do SUAS.",
        driveFileId: "SEU_ID_DRIVE_2_2",
        pdf: "./pdf/modulo-2/02-o-registro-mensal-de-atendimento.pdf",
        baseLegal: [
          { norma: "Resolução CIT nº 4/2011", nota: "Institui o RMA como instrumento de registro mensal de atendimentos dos equipamentos do SUAS." },
          { norma: "Resolução CIT nº 2/2017", nota: "Atualiza os formulários e as validações automáticas do RMA." }
        ],
        quiz: [
          { pergunta: "Quem disponibiliza o sistema RMA?", opcoes: ["O MDS (Ministério do Desenvolvimento Social)", "A Secretaria Municipal de Assistência Social", "O CRAS diretamente", "O SISC"], correta: 0 },
          { pergunta: "Qual validação automática o material cita como exemplo no RMA?", opcoes: ["O número de famílias novas não pode ser maior que o total de famílias inseridas", "O CPF precisa ter selo digital", "Todo atendimento precisa de assinatura do coordenador", "Não existem validações automáticas no RMA"], correta: 0 }
        ],
        resumo: [
          "O RMA é disponibilizado pelo MDS e deve ser preenchido mensalmente, com atenção ao mês de referência.",
          "O sistema pede dados como famílias acompanhadas no PAIF, novas famílias inseridas e beneficiários de programas como Bolsa Família e BPC.",
          "Existem validações automáticas — por exemplo, o número de famílias novas não pode ser maior que o total de famílias inseridas.",
          "Os dados do RMA servem de base para a avaliação do cofinanciamento federal repassado aos municípios."
        ]
      },
      {
        id: 9,
        titulo: "Prontuário eletrônico",
        curta: "Histórico de atendimentos e controle de sigilo.",
        desc: "Sistemas de gestão do CRAS organizam as informações de cada pessoa em um prontuário único, com histórico completo e controle de sigilo.",
        driveFileId: "SEU_ID_DRIVE_2_3",
        pdf: "./pdf/modulo-2/03-prontuario-eletronico.pdf",
        baseLegal: [
          { norma: "Lei nº 13.709/2018 (LGPD)", nota: "Regula o tratamento de dados pessoais e sensíveis registrados no prontuário eletrônico." },
          { norma: "Resolução CFESS nº 273/1993 (Código de Ética do/a Assistente Social)", nota: "Fundamenta o controle de sigilo sobre atendimentos técnicos marcados como sigilosos." }
        ],
        quiz: [
          { pergunta: "O que o recurso de \"controle de sigilo\" permite fazer no prontuário eletrônico?", opcoes: ["Excluir atendimentos antigos automaticamente", "Marcar atendimentos como sigilosos, restringindo o acesso a técnicos autorizados", "Compartilhar o prontuário com qualquer usuário do sistema", "Bloquear o cadastro de novos atendimentos"], correta: 1 },
          { pergunta: "Além do nome, por quais outros dados é possível buscar uma pessoa no sistema?", opcoes: ["Apenas pelo endereço", "CPF ou código familiar", "Apenas pelo número do RMA", "Apenas pela unidade de referência"], correta: 1 }
        ],
        resumo: [
          "A tela inicial prioriza a fila de atendimentos, com busca por nome, CPF ou código familiar em toda a base.",
          "O prontuário individual centraliza dados pessoais, histórico de atendimentos, nome social, vínculo familiar e unidade de referência.",
          "O controle de sigilo permite marcar atendimentos como sigilosos, restringindo o acesso a técnicos autorizados.",
          "É possível agendar visitas e emitir declarações de comparecimento com identidade visual do município."
        ]
      },
      {
        id: 10,
        titulo: "Fluxo de atendimento",
        curta: "Registro de procedimentos técnicos.",
        desc: "Este tópico mostra como um atendimento é iniciado, executado e registrado dentro de um sistema de gestão socioassistencial, do primeiro contato até o fechamento do caso.",
        driveFileId: "SEU_ID_DRIVE_2_4",
        pdf: "./pdf/modulo-2/04-fluxo-de-atendimento.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 33/2012 (NOB-SUAS)", nota: "Organiza o trabalho social nos equipamentos do SUAS, incluindo a articulação com a rede socioassistencial e intersetorial." }
        ],
        quiz: [
          { pergunta: "Como um atendimento pode ser classificado, segundo o material?", opcoes: ["Urgente, normal ou de rotina", "Simplificado, técnico ou de cadastro único", "Presencial ou remoto", "Individual ou coletivo"], correta: 1 },
          { pergunta: "O que diferencia \"rede socioassistencial\" de \"rede intersetorial\"?", opcoes: ["São a mesma coisa com nomes diferentes", "Rede socioassistencial são os equipamentos do SUAS; rede intersetorial envolve saúde, educação, conselho tutelar", "Rede intersetorial só existe em capitais", "Rede socioassistencial é privada; rede intersetorial é pública"], correta: 1 }
        ],
        resumo: [
          "O atendimento pode ser classificado como simplificado, técnico ou de cadastro único, com definição de setor responsável e prioridade.",
          "O sistema deve permitir selecionar mais de um procedimento por atendimento, evitando perda de dados estatísticos.",
          "É importante diferenciar \"rede socioassistencial\" de \"rede intersetorial\" para um levantamento de demandas mais preciso.",
          "Alteração de endereço durante o atendimento deve sinalizar automaticamente o setor de Cadastro Único."
        ]
      },
      {
        id: 11,
        titulo: "Composição familiar e endereços",
        curta: "Cadastro de família e situação de rua.",
        desc: "Além do atendimento individual, o sistema precisa organizar as informações no nível da família, incluindo composição familiar, endereços e situações específicas como pessoas em situação de rua.",
        driveFileId: "SEU_ID_DRIVE_2_5",
        pdf: "./pdf/modulo-2/05-composicao-familiar-e-enderecos.pdf",
        baseLegal: [
          { norma: "Decreto nº 6.135/2007 (Cadastro Único)", nota: "Institui o CadÚnico como base de referência para a composição familiar e o endereço vinculado à família." }
        ],
        quiz: [
          { pergunta: "O que acontece com o histórico de endereços de uma família no sistema?", opcoes: ["É apagado a cada mudança de endereço", "Fica mantido, com histórico completo de alterações", "Só o endereço mais recente é salvo", "Não é possível registrar mais de um endereço por família"], correta: 1 },
          { pergunta: "Para famílias em situação de rua, o que o sistema deve fazer?", opcoes: ["Impedir o cadastro até haver um endereço fixo", "Liberar campos descritivos específicos, sem exigir endereço fixo", "Cadastrar automaticamente o endereço do CRAS", "Recusar o atendimento até regularização"], correta: 1 }
        ],
        resumo: [
          "A busca por CPF permite criar um cadastro simplificado sem interromper o atendimento, caso a pessoa não esteja registrada.",
          "É possível cancelar atendimentos com justificativa; o atendimento sigiloso restringe o acesso a técnicos com permissão específica.",
          "É possível gerenciar a composição familiar, adicionando ou transferindo membros entre núcleos por CPF.",
          "Endereços ficam vinculados à família, mantendo histórico completo de alterações.",
          "Famílias em situação de rua têm campos descritivos específicos, sem exigência de endereço fixo."
        ]
      },
      {
        id: 12,
        titulo: "Acompanhamento intersetorial",
        curta: "Diagnóstico e evolução da família.",
        desc: "O acompanhamento familiar intersetorial reúne, em um só lugar, o diagnóstico da família, os atendimentos recebidos e a evolução ao longo do tempo.",
        driveFileId: "SEU_ID_DRIVE_2_6",
        pdf: "./pdf/modulo-2/06-acompanhamento-intersetorial.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 109/2009 (Tipificação Nacional de Serviços Socioassistenciais)", nota: "Tipifica o PAIF e a lógica de acompanhamento familiar continuado." },
          { norma: "Resolução CNAS nº 145/2004 (PNAS)", nota: "Estabelece a matricialidade sociofamiliar como princípio organizador do acompanhamento." }
        ],
        quiz: [
          { pergunta: "O que é preciso registrar para encerrar o acompanhamento de uma família?", opcoes: ["Apenas um clique de \"arquivar\"", "Data de desligamento, motivo e relatório final de evolução", "Só a assinatura do coordenador", "Nada, o sistema encerra automaticamente após 1 ano"], correta: 1 },
          { pergunta: "O que caracteriza a \"visão viva\" da família no acompanhamento?", opcoes: ["Um vídeo de apresentação da família", "A integração automática de novos atendimentos, encaminhamentos e visitas conforme acontecem", "Uma foto atualizada da família a cada visita", "Um selo de \"família ativa\" que nunca muda"], correta: 1 }
        ],
        resumo: [
          "O módulo de acompanhamento reúne diagnóstico de inclusão, participações, composição familiar e histórico de atendimentos, visitas e benefícios.",
          "No momento da inclusão, o sistema solicita o registro de procedimentos técnicos e da evolução da família.",
          "O acompanhamento mantém uma visão \"viva\" da família, integrando automaticamente novos atendimentos e encaminhamentos.",
          "O encerramento exige registro da data de desligamento, motivo e relatório final de evolução."
        ]
      },
      {
        id: 13,
        titulo: "Gestão do SCFV",
        curta: "Grupos, vagas e listas de espera.",
        desc: "Este tópico mostra como um sistema de gestão apoia a organização prática dos grupos do Serviço de Convivência e Fortalecimento de Vínculos.",
        driveFileId: "SEU_ID_DRIVE_2_7",
        pdf: "./pdf/modulo-2/07-gestao-do-scfv.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 109/2009 e Resolução CNAS nº 1/2013", nota: "Definem os parâmetros de faixa etária, capacidade de vagas e cofinanciamento federal dos grupos do SCFV." }
        ],
        quiz: [
          { pergunta: "Por que a classificação correta das faixas etárias dos grupos é importante?", opcoes: ["É só uma formalidade sem consequência prática", "É essencial para o reconhecimento do grupo pelo sistema federal e o cofinanciamento", "Define a cor do crachá dos participantes", "Só importa para grupos de idosos"], correta: 1 },
          { pergunta: "O que o sistema deve manter sobre a lista de espera, segundo o material?", opcoes: ["Nenhum histórico, apenas a lista atual", "Um histórico auditável dos motivos de remoção", "Um ranking público dos que esperam mais tempo", "Apenas o nome, sem outros dados"], correta: 1 }
        ],
        resumo: [
          "Um painel de indicadores mostra atendimentos mensais, produtividade por técnico e famílias sem técnico atribuído.",
          "A criação de grupos envolve vincular a uma unidade e programa, definindo turno, capacidade e responsável técnico.",
          "A classificação correta das faixas etárias é essencial para o reconhecimento do grupo pelo sistema federal e o cofinanciamento.",
          "A lista de espera pode ser unificada no sistema, com histórico auditável dos motivos de remoção."
        ]
      },
      {
        id: 14,
        titulo: "Agendamento e frequência",
        curta: "Agenda de encontros e controle de presença.",
        desc: "Fechando o conteúdo, este tópico trata da organização da agenda dos grupos do SCFV e do controle de frequência dos participantes.",
        driveFileId: "SEU_ID_DRIVE_2_8",
        pdf: "./pdf/modulo-2/08-agendamento-e-frequencia.pdf",
        baseLegal: [
          { norma: "Resolução CNAS nº 1/2013", nota: "Define a frequência mínima recomendada do SCFV e os critérios para abono de faltas justificadas." }
        ],
        quiz: [
          { pergunta: "Como uma falta pode ser justificada no sistema, segundo o material?", opcoes: ["Apenas por telefone com a coordenação", "Com anexos documentais", "Faltas não podem ser justificadas", "Só com atestado médico, nenhum outro documento"], correta: 1 },
          { pergunta: "Para ausências temporárias e previstas, o que o sistema pode automatizar?", opcoes: ["Cancelar a vaga do participante permanentemente", "O abono de faltas por um período determinado", "Transferir o participante para outro grupo automaticamente", "Não há esse recurso no sistema"], correta: 1 }
        ],
        resumo: [
          "A agenda de grupos permite programar encontros com temática e local definidos.",
          "O registro de cada encontro inclui os educadores presentes e o controle de frequência dos participantes.",
          "É possível justificar faltas com anexos, e automatizar o abono para ausências temporárias previstas.",
          "O atendimento no domicílio foca em visitas individuais, enquanto o SCFV trabalha com grupos e encontros coletivos."
        ]
      }
    ]
  }
];
