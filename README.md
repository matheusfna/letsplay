# 🏟️ **SportCourt Manager** - Sistema de Aluguel de Quadras Esportivas

> Aplicação acadêmica desenvolvida com **Ionic + Angular** para gestão de reservas de quadras esportivas, incluindo futebol, futsal, vôlei e outros esportes.

![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Status](https://img.shields.io/badge/status-finalizado-brightgreen?style=for-the-badge)

---

## ✨ Descrição

O **LetsPlay** é um sistema web e mobile que permite o gerenciamento de quadras esportivas. A plataforma oferece uma interface para que usuários possam reservar quadras e um painel administrativo exclusivo para o controle de agendamentos, horários e usuários.

---

## 🛠️ Tecnologias Utilizadas

- **Ionic Framework**
- **Angular**
- **Firebase Authentication**
- **Firebase Firestore**
- **TypeScript**
- **SCSS**

---

## ⚙️ Funcionalidades

- 🗓️ **Reserva de quadras para esportes diversos**
- 🔐 **Sistema de login e autenticação**
- 🏢 **Painel administrativo para gerenciamento de quadras e horários**
- 🧩 **Proteção de rotas com Auth Guards**
- 🚀 **Deploy via Firebase Hosting**
- 📱 **Interface responsiva para mobile**

---

## 📂 Estrutura Principal do Projeto

| Caminho                         | Descrição                                           |
|---------------------------------|-----------------------------------------------------|
| `src/app/auth/`                 | Serviços de autenticação com Firebase               |
| `src/app/admin/`                | Gerenciamento de quadras e reservas                 |
| `src/app/guards/`               | Proteção de rotas para o painel administrativo      |
| `src/app/pages/`                | Telas de login, cadastro e reservas                 |
| `src/app/services/`             | Serviços auxiliares para interação com o sistema    |
| `firebase.json`                 | Configuração para deploy no Firebase Hosting        |
| `ionic.config.json`             | Configuração do Ionic Framework                     |
| `angular.json`                  | Configuração do Angular CLI                         |

---

## 🚀 Como executar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/sportcourt-manager.git

# 2. Instale as dependências
npm install

# 3. Execute a aplicação
ionic serve
