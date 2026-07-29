# Resumo do projeto — Universidade SIABES

> Documento de contexto para retomar o trabalho em uma nova conversa. Cole este arquivo (ou peça pra ler) no início da próxima sessão.

## Sobre o projeto

- **Nome real do produto:** Universidade SIABES (não "Universidade SUAS" — esse foi um nome usado por engano no início, corrigido depois).
- **O que é:** plataforma web de capacitação para técnicos, orientadores sociais e gestores da assistência social, ensinando o SUAS (Sistema Único de Assistência Social) na prática e o uso do **SIABES**, o sistema de gestão socioassistencial (prontuário eletrônico, SCFV, RMA, CadÚnico etc.) usado pelos CRAS.
- **Acesso:** embutida na Central de Tutoriais do **Lumio**.
- **URL ao vivo:** https://universidadesiabes.github.io/
- **Pasta local:** `Documents\universidade_suas`
- **Repositório GitHub:** `universidadesiabes/universidadesiabes.github.io` (organização própria, criada em 27/07 — antes era `Vinicius957/universidade-suas`, transferido no mesmo dia pra tirar o nome de usuário pessoal da URL. Nome escolhido de propósito: repo `<org>.github.io` publica direto na raiz do domínio.)
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

7. **Site publicado (27/07):** GitHub Pages habilitado (branch `main`, raiz). Testado: título, CSS, JS, `cursos.js` e PDFs carregando com HTTP 200.
   - Cogitamos hospedar via Supabase Storage antes — **não funciona**: todo objeto público do Storage vem com `Content-Security-Policy: default-src 'none'; sandbox` fixo, o que bloqueia a execução do `script.js` (página abriria em branco). Ficou descartado; o bucket criado foi apagado.
   - **URL trocada (27/07, mesmo dia):** o repositório foi transferido de `Vinicius957/universidade-suas` para a organização **`universidadesiabes`** (criada pelo usuário) e renomeado para `universidadesiabes.github.io` (nome especial do GitHub que publica direto na raiz do domínio). URL final e definitiva: **https://universidadesiabes.github.io/** — sem o nome de usuário pessoal, sem path de repositório. GitHub mantém redirecionamento automático da URL antiga por um tempo. O remote local do git (`origin`) já foi atualizado para `https://github.com/universidadesiabes/universidadesiabes.github.io.git`.

8. **Vídeos no Google Drive (27/07):** as 14 aulas foram upadas pelo usuário numa pasta "Universidade SUAS" (subpastas Módulo 1 e Módulo 2, replicando a estrutura do curso), compartilhadas como "Qualquer pessoa com o link". Os 14 `driveFileId` em `config/cursos.js` foram trocados pelos IDs reais e o commit já está publicado — confirmado ao vivo, sem placeholders restantes.

9. **Redesenho do hero da home (27/07):** adicionada a logo da A&3 Tecnologia (`assets/img/logo-ae3.png`) e o hero da home foi redesenhado; depois, a espiral decorativa e os divisores do eyebrow foram removidos do mesmo hero (dois commits separados, o segundo ajustando o primeiro).

10. **README.md atualizado (28/07):** URL de clone corrigida para o repo definitivo (`universidadesiabes/universidadesiabes.github.io`), URL ao vivo adicionada, roadmap marcando vídeos/PDFs como concluídos e listando as ideias de conteúdo em aberto (item abaixo) como itens de roadmap.

11. **Identidade visual A&3 aplicada em todo o site (28/07):** patch recebido pronto (paleta, tipografia, forma) — validado (hash do arquivo antes do patch, dry-run, comparação do resultado do patch com os arquivos soltos enviados) antes de aplicar.
    - Paleta: azul `#0A57C2` como acento primário (era dourado `#E8A917`), tinta `#101826` (era navy `#0E2540`), neutros no lugar do creme.
    - Nomes semânticos novos (`--brand`, `--success`, `--accent-2`) com os antigos (`--gold`, `--olive`) mantidos como **aliases** — necessário porque `script.js:309` monta `var(--` + `modulo.accent` + `)` dinamicamente a partir de `config/cursos.js` (`accent: "gold"`/`"olive"`), então remover os nomes antigos quebraria essa cor silenciosamente.
    - Tipografia: Space Grotesk (títulos/números) + Inter (corpo), removida a serifada Newsreader.
    - Forma: cards e botões com raio menor (14px→10px cards, pill 100px→8px botões), sombras neutras no lugar das coloridas/brilhantes.
    - `--success` (verde, só conclusão de aula/quiz) separado de `--accent-2` (bronze, só identidade visual do módulo 2) — no CSS antigo o mesmo verde-oliva fazia as duas funções.
    - Nenhuma mudança em JS ou em `config/cursos.js`.
12. **Espirais decorativas removidas (28/07):** os círculos concêntricos na Trilha e no rodapé (`.spiral-field`) tiravam a atenção do resto — removidos do HTML e o CSS órfão também foi limpo.
13. **Hero em 2 colunas com gráfico de rota — aplicado e depois revertido (28/07):** um segundo patch trazia o hero da home em grid de 2 colunas com um gráfico SVG mostrando a rota dos 2 módulos reais publicados + um "Em breve" fantasma. Aplicado, mas o usuário achou o resultado visual ruim ("ficou uma bosta") — revertido de volta pro hero centralizado em coluna única, mantendo o resto da identidade visual (paleta/tipografia/forma).
14. **Ilustração animada no hero — rede neural (28/07):** usuário trouxe um componente React/TypeScript pronto (canvas com nós flutuantes, conexões por proximidade e pulsos de luz viajando entre nós). Como o site é HTML/CSS/JS puro sem bundler, a lógica foi portada pra JS vanilla em `assets/js/hero-network.js`, com cores ajustadas à paleta atual (`#8FB8EE` nós, `#F5A623` pulsos). Roda como fundo do hero, atrás do texto. Dois cuidados adicionados que o componente original não tinha: pausa via `IntersectionObserver` quando o hero sai de tela (economiza CPU ao trocar de view), e fallback estático (sem movimento) para `prefers-reduced-motion`. **A animação não tem timer — roda indefinidamente enquanto o hero estiver visível.**
15. **Favicon adicionado e corrigido (28/07):** primeira versão usou `assets/img/logo-ae3.png` direto, mas essa logo é retangular (40×24) e ficava espremida/distorcida no favicon quadrado da aba. Gerada `assets/img/favicon.png`: a mesma logo centralizada num canvas quadrado (40×40) com fundo transparente, sem esticar a imagem.
16. **Deploy (28/07):** todos os commits de hoje foram enviados pra `dev` e depois mesclados por fast-forward em `main`, que é a branch servida pelo GitHub Pages (repo `<org>.github.io` publica direto na raiz). Confirmado ao vivo em https://universidadesiabes.github.io/ após cada deploy (comparação byte a byte do HTML/CSS publicado com o local). **Nota de cache:** favicon é cacheado pelo navegador de um jeito muito mais teimoso que o resto da página — hard refresh (Ctrl+Shift+R) às vezes não basta, é preciso fechar a aba e abrir de novo (ou testar em anônima).

## Em aberto / decisão pendente

- Nenhum bloqueador grande restante para o curso funcionar. Itens de roadmap (não urgentes):
  - Roadmap do README: sistema de pesquisa, acessibilidade, performance. (PDFs em `pdf/` já são conteúdo real, um por aula — não é mais placeholder.)
  - Ideias de conteúdo cogitadas mas não implementadas: comparativo SISC x Gessuas x RMA lado a lado, FAQ por módulo, certificado de conclusão em PDF, seção "quem responde por quê" (papéis/permissões).
- **Checklist manual da identidade visual (item 11) ainda não confirmada pelo usuário:** dar play num vídeo, ver aula concluída ficando verde (não bronze), módulo 2 bronze / módulo 1 azul, quiz (acerto verde/erro vermelho), progresso persistindo ao recarregar, teste no celular e embutido no Lumio (esse último é o que menos dá pra simular fora do ambiente real).
- **Ilustração do hero (item 14) é a versão "pra ver como fica"** — usuário sinalizou que pode trazer uma ideia própria de ilustração depois; a rede neural atual não é necessariamente a versão final.
