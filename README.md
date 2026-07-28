# 🎓 Universidade SIABES

> Plataforma web para disponibilização de conteúdos educacionais da Universidade SIABES.

**Ao vivo:** https://universidadesiabes.github.io/

---

## 📖 Sobre

A Universidade SIABES é um ambiente digital desenvolvido para centralizar cursos, videoaulas e materiais de apoio em uma interface simples, moderna e intuitiva.

O projeto foi concebido para funcionar integrado à plataforma Lumio, permitindo que os usuários acessem conteúdos de capacitação de forma organizada e eficiente.
---

# 🎯 Objetivos

- Disponibilizar cursos online.
- Organizar conteúdos de forma intuitiva.
- Facilitar o acesso às videoaulas.
- Disponibilizar materiais em PDF.
- Oferecer uma experiência simples para os usuários.

---

# ✨ Funcionalidades

- Interface responsiva
- Player de vídeo integrado ao Google Drive
- Download de materiais em PDF
- Navegação entre cursos
- Estrutura modular
- Fácil manutenção

---

# 🏗 Arquitetura

O projeto foi desenvolvido utilizando uma arquitetura simples e organizada, separando responsabilidades entre interface, configuração e lógica da aplicação.

```
index.html
      │
      ▼
script.js
      │
      ▼
config/cursos.js
      │
      ├── Links do Google Drive
      └── PDFs locais
```

---

# 📁 Estrutura do Projeto

```text
universidadesiabes.github.io/
│
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
│
├── config/
│   └── cursos.js        # fonte única de dados dos cursos (vídeo, pdf, tópicos, resumo, base legal, quiz)
│
├── pdf/                  # materiais em PDF baixáveis, um por aula (ver pdf/README.md)
│
├── index.html
├── README.md
└── .gitignore
```

---

# 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

# 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/universidadesiabes/universidadesiabes.github.io.git
```

Entre na pasta:

```bash
cd universidadesiabes.github.io
```

Abra o arquivo:

```
index.html
```

---

# 📌 Organização

O projeto segue uma estrutura modular.

- **assets/** → arquivos estáticos.
- **config/** → configurações e links externos.
- **pdf/** → materiais didáticos.

---

# 🗺 Roadmap

- [x] Estrutura inicial
- [x] Organização das pastas
- [x] Publicação no GitHub (GitHub Pages, `universidadesiabes.github.io`)
- [x] Interface principal
- [x] Catálogo de cursos (2 módulos, 14 aulas)
- [x] Página de aulas, com progresso, base legal e quiz por aula
- [x] Vídeos publicados no Google Drive (14 aulas, `driveFileId` real em `config/cursos.js`)
- [x] PDFs reais em `pdf/` (um por aula, ver `pdf/README.md`)
- [ ] Sistema de pesquisa
- [ ] Melhorias de acessibilidade
- [ ] Otimização de desempenho
- [ ] Comparativo SISC x Gessuas x RMA lado a lado
- [ ] FAQ por módulo
- [ ] Certificado de conclusão em PDF
- [ ] Seção "quem responde por quê" (papéis/permissões)

---

# 🔀 Versionamento

O projeto utiliza Git para controle de versões.

Cada funcionalidade é implementada de forma incremental, permitindo rastreabilidade e manutenção contínua.

---

# 📄 Licença

Projeto desenvolvido para fins institucionais e educacionais.

---

# 👨‍💻 Desenvolvedor

**Vinicius Gabriel Sousa Soares**

GitHub:
https://github.com/Vinicius957