# 🎓 Universidade SIABES

> Plataforma web para disponibilização de conteúdos educacionais da Universidade SIABES.

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
universidade-suas/
│
├── assets/
│   ├── css/
│   └── js/
│
├── config/
│   └── cursos.js        # fonte única de dados dos cursos (vídeo, pdf, tópicos, resumo)
│
├── pdf/                  # materiais em PDF baixáveis (ver pdf/README.md)
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
git clone https://github.com/Vinicius957/universidade-suas.git
```

Entre na pasta:

```bash
cd universidade-suas
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
- [x] Publicação no GitHub
- [x] Interface principal
- [x] Catálogo de cursos
- [x] Página de aulas
- [ ] Vídeos publicados no Google Drive (hoje o campo `driveFileId` em `config/cursos.js` está com placeholder)
- [ ] PDFs reais em `pdf/` (ver `pdf/README.md`)
- [ ] Sistema de pesquisa
- [ ] Melhorias de acessibilidade
- [ ] Otimização de desempenho

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