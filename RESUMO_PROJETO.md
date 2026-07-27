# Resumo do projeto — Universidade SIABES

> Documento de contexto para retomar o trabalho em uma nova conversa. Cole este arquivo (ou peça pra ler) no início da próxima sessão.

## Sobre o projeto

- **Nome real do produto:** Universidade SIABES (não "Universidade SUAS" — esse foi um nome usado por engano no início, corrigido depois).
- **O que é:** plataforma web de capacitação para técnicos, orientadores sociais e gestores da assistência social, ensinando o SUAS (Sistema Único de Assistência Social) na prática e o uso do **SIABES**, o sistema de gestão socioassistencial (prontuário eletrônico, SCFV, RMA, CadÚnico etc.) usado pelos CRAS.
- **Acesso:** embutida na Central de Tutoriais do **Lumio**.
- **Pasta local:** `Documents\universidade_suas`
- **Repositório GitHub:** `Vinicius957/universidade-suas` (nome técnico do repo **mantido de propósito** — não foi renomeado para SIABES para não quebrar a URL do GitHub Pages, que provavelmente está referenciada no Lumio).
- **Stack:** HTML + CSS + JS puro (sem framework). Dados de todos os módulos/aulas centralizados em `config/cursos.js`. Vídeos hospedados no Google Drive e embutidos via iframe (`driveFileId` por aula).
- **Conteúdo:** 2 módulos publicados, 14 aulas ao todo.
  - Módulo 1 — O SCFV e os sistemas de gestão (6 aulas)
  - Módulo 2 — Atendimento no Domicílio, RMA e CRAS (8 aulas)
- **Vídeos-fonte:** gravações originais em `Documents\Projeto Universidade\video aulas\` (duas gravações de ~2h, 02/07 e 08/07/2026); os clipes já cortados por aula ficam em `...\video aulas\cortados\modulo-1\` e `modulo-2\`.

## O que já foi feito nesta sessão

1. **Cortes de vídeo (módulo 1, com ffmpeg):**
   - Aula 1 (`01-o-que-e-o-scfv.mp4`): mantido 01:00 → 09:16
   - Aula 2 (`02-publico-prioritario-e-ciclos-de-vida.mp4`): recortada **da gravação original de 02/07**, trecho 10:00 → 26:01 (as demais aulas usam os clipes já cortados como fonte, só essa veio do bruto)
   - Aula 3 e 4: mantidas inteiras, sem corte
   - Aula 5 (`05-gessuas-e-beneficios-eventuais.mp4`): mantido início → 15:26
   - Aula 6 (`06-boas-praticas-de-gestao.mp4`): mantido 00:03 → fim

   **Cortes de vídeo (módulo 2, com ffmpeg, 27/07):**
   - Aula 1 (`01-atendimento-no-domicilio-e-o-pdu.mp4`): mantido 00:00 → 14:34
   - Aula 2 (`02-o-registro-mensal-de-atendimento.mp4`): mantido 00:33 → 10:08
   - Aula 3 (`03-prontuario-eletronico.mp4`): mantido 00:14 → 17:03
   - Aula 4 (`04-fluxo-de-atendimento.mp4`): mantida inteira, sem corte
   - Aula 5 (`05-composicao-familiar-e-enderecos.mp4`): mantido 00:00 → 14:40
   - Aula 6 (`06-acompanhamento-intersetorial.mp4`): mantido 00:05 → 10:31
   - Aula 7 (`07-gestao-do-scfv.mp4`): mantido 00:09 → fim
   - Aula 8 (`08-agendamento-e-frequencia.mp4`): mantido 00:00 → 18:13
   - **Módulo 1 e 2 estão com os cortes finalizados.**

2. **Ajustes de tom "menos cara de IA" (pedido do chefe):**
   - Fonte trocada para só **Inter** em todo o site (removida a serifada Fraunces e a mono IBM Plex Mono)
   - Removida uma citação-epígrafe fabricada da home
   - Reescritas 3 caixas de "Analogia" (SUAS/SUS, CRAS-como-carro, fechamento da jornada) em tom direto/institucional, renomeadas para "Observação"/"Orientação"
   - Removido o símbolo "≈"/"~" usado em durações (ex: "≈ 2h" → "2h"), mantendo o til só em acentuação normal do português

3. **Seção "Base legal" em cada uma das 14 aulas** (`config/cursos.js`, campo `baseLegal`, renderizada na aba Resumo): referências normativas reais e verificadas por pesquisa (Resolução CNAS 109/2009, Resolução CNAS 1/2013, Decreto 6.307/2007, LGPD, Código de Ética CFESS, Resolução CIT do RMA, Decreto do CadÚnico, etc.) — cada uma com uma nota curta ligando a norma ao conteúdo da aula.

4. **Nova seção na home "Para quem é este curso"**: 3 perfis (Técnico de referência, Orientador social, Coordenação/gestão municipal), com um fundo levemente destacado (`.section-band`) pra separar visualmente da seção seguinte ("Comece pela trilha do SUAS").

5. **Renomeação de marca:** "Universidade SUAS" → "Universidade SIABES" no título da aba, logo do menu, rodapé, README e comentário do `cursos.js`. Repositório/pasta técnica **não** foram renomeados (decisão consciente).

6. **Redesenho do painel lateral de aulas** (27/07): aplicado só o componente `.side-panel`/`.topic-item`/`.topic-time` do export — bolinhas circulares (26px) com borda, preenchida dourado quando ativa e verde-oliva quando concluída, linha divisória entre itens, sem mais o highlight de fundo. Decisão: **fonte (Archivo + Source Sans 3) e botões quadrados (8px) do mesmo export NÃO foram aplicados** — o site continua só com Inter e botões pill (100px), pra não contradizer a limpeza de tom feita antes.

7. **Site publicado (27/07):** GitHub Pages habilitado (branch `main`, raiz), no ar em **https://vinicius957.github.io/universidade-suas/**. Testado: título, CSS, JS, `cursos.js` e PDFs carregando com HTTP 200.
   - Cogitamos hospedar via Supabase Storage antes — **não funciona**: todo objeto público do Storage vem com `Content-Security-Policy: default-src 'none'; sandbox` fixo, o que bloqueia a execução do `script.js` (página abriria em branco). Ficou descartado; o bucket criado foi apagado.

8. **Vídeos no Google Drive (27/07):** as 14 aulas foram upadas pelo usuário numa pasta "Universidade SUAS" (subpastas Módulo 1 e Módulo 2, replicando a estrutura do curso), compartilhadas como "Qualquer pessoa com o link". Os 14 `driveFileId` em `config/cursos.js` foram trocados pelos IDs reais e o commit já está publicado — confirmado ao vivo, sem placeholders restantes.

## Em aberto / decisão pendente

- Nenhum bloqueador grande restante para o curso funcionar. Itens de roadmap (não urgentes):
  - Roadmap do README: sistema de pesquisa, acessibilidade, performance. (PDFs em `pdf/` já são conteúdo real, um por aula — não é mais placeholder.)
  - Ideias de conteúdo cogitadas mas não implementadas: comparativo SISC x Gessuas x RMA lado a lado, FAQ por módulo, certificado de conclusão em PDF, seção "quem responde por quê" (papéis/permissões).
