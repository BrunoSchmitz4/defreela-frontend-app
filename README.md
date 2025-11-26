# 🚀 DeFreela Frontend

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Plataforma moderna para gestão de projetos freelance**

</div>

---

## 📋 Sobre o Projeto

DeFreela é uma aplicação web moderna construída com React que conecta empresas, freelancers e projetos em uma plataforma integrada. O frontend oferece uma interface intuitiva e responsiva para gerenciar todos os aspectos do trabalho freelance.

###  Destaques

-  **Design Moderno**: Interface clean com sistema de design consistente
-  **Responsivo**: Totalmente adaptável para mobile, tablet e desktop
-  **Autenticação JWT**: Sistema seguro de autenticação com Context API
-  **Performance**: Otimizado com code splitting e lazy loading
-  **Animações**: Experiência fluida com Animate.css
-  **Docker Ready**: Configuração completa para containerização

---

##  Funcionalidades

### 🏢 Gestão de Empresas
-  Listagem e cadastro de empresas
-  Visualização de informações detalhadas
-  Cards informativos com dados essenciais

### 👨‍💻 Gestão de Freelancers
-  Catálogo de freelancers disponíveis
-  Portfólios e especializações
-  Informações de contato e habilidades

### 📁 Gestão de Projetos
-  Criação e acompanhamento de projetos
-  Progresso visual com barras de status
-  Kanban de atividades e tarefas
-  Atribuição de freelancers aos projetos
-  Reordenação de atividades
-  Toggle de status de tarefas

### 🔐 Autenticação
-  Login seguro com JWT
-  Rotas protegidas
-  Context de autenticação global
-  Auto-redirect em caso de token expirado

### 🎨 UI/UX
-  Sistema de design unificado
-  Paleta de cores moderna (Blue, White & Black)
-  Componentes reutilizáveis
-  Animações suaves e transições
-  Mobile-first approach

---

## 🛠️ Tecnologias

### Core
- **React 19.2.0** - Biblioteca principal
- **React Router DOM 7.9.6** - Roteamento SPA
- **Axios 1.13.2** - Cliente HTTP

### Estilização
- **CSS Modules** - Estilos encapsulados
- **Animate.css 4.1.1** - Biblioteca de animações

### Build & Deploy
- **React Scripts 5.0.1** - Tooling CRA
- **Docker** - Containerização
- **Nginx** - Servidor de produção

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/BrunoSchmitz4/defreela-frontend-app

# Entre no diretório
cd defreela-frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm start
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL da API Backend
REACT_APP_API_URL=http://localhost:8080

```

### Configuração da API

O frontend está configurado para se comunicar com a API através do arquivo `src/api/axiosClient.js`:

```javascript
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8080";
```

**Nota**: Em produção com Docker, o Nginx faz proxy reverso para o backend através da rota `/api/`.

---

## 📂 Estrutura do Projeto

```
frontend/
├── public/                 # Arquivos estáticos
│   ├── index.html         # HTML principal
│   └── favicon.ico        # Ícone do site
│
├── src/
│   ├── api/               # Serviços de comunicação com API
│   │   ├── axiosClient.js       # Cliente HTTP configurado
│   │   ├── authService.js       # Autenticação
│   │   ├── empresaService.js    # Empresas
│   │   ├── freelancerService.js # Freelancers
│   │   ├── projetoService.js    # Projetos
│   │   ├── atividadeService.js  # Atividades
│   │   ├── tarefaService.js     # Tarefas
│   │   └── ...                  # Outros serviços
│   │
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Navbar/              # Barra de navegação
│   │   ├── ProjectCard/         # Card de projeto
│   │   ├── ActivityCard/        # Card de atividade
│   │   ├── TaskItem/            # Item de tarefa
│   │   ├── EntityModal/         # Modal genérico
│   │   ├── ProtectedRoute/      # Rota protegida
│   │   ├── Spinner/             # Loading spinner
│   │   └── ui/                  # Componentes UI base
│   │       ├── Button/
│   │       └── Input/
│   │
│   ├── context/           # Context API
│   │   └── AuthContext.jsx      # Contexto de autenticação
│   │
│   ├── hooks/             # Custom Hooks
│   │   ├── useCrud.js           # CRUD genérico
│   │   └── useProject.js        # Lógica de projetos
│   │
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home/                # Página inicial
│   │   ├── Login/               # Autenticação
│   │   ├── Dashboard/           # Dashboard principal
│   │   ├── Companies/           # Listagem de empresas
│   │   ├── Freelancers/         # Listagem de freelancers
│   │   ├── Projects/            # Listagem de projetos
│   │   ├── ProjectDetail/       # Detalhes do projeto
│   │   └── ...                  # Outras páginas
│   │
│   ├── routes/            # Configuração de rotas
│   │   └── AppRoutes.jsx        # Rotas da aplicação
│   │
│   ├── styles/            # Estilos globais
│   │   └── globals.css          # CSS global + sistema de design
│   │
│   ├── App.jsx            # Componente raiz
│   └── index.jsx          # Entry point
│
├── nginx.conf             # Configuração do Nginx
├── Dockerfile             # Configuração Docker
├── .dockerignore          # Arquivos ignorados no Docker
├── package.json           # Dependências e scripts
└── README.md             # Este arquivo
```

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm test` | Executa testes |
| `npm run eject` | Ejeta configurações do CRA ⚠️ |

---

## 🚀 Deploy

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# O build estará em ./build/
```

## 📄 Licença

Esse projeto é acadêmico.

---

## 👥 Autores

- Bruno Schmitz da Silva

---
