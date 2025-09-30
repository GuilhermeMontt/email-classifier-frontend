# Classificador de Email - Frontend

Esta é a aplicação frontend para o projeto Classificador de Email. Ela fornece uma interface de usuário simples para enviar o conteúdo de um email — seja como texto ou em um arquivo `.pdf`/`.txt` — para um serviço de backend que o classifica em uma categoria específica e sugere uma resposta.

## 🌐 Aplicação Online (Deploy)

A aplicação frontend está disponível para uso online através do seguinte link:

**URL:** `https://email-classifier-frontend-oficial.onrender.com/`

## ✨ Funcionalidades

- Envio de conteúdo de email via campo de texto.
- Upload de arquivos de email nos formatos `.pdf` ou `.txt`.
- Exibição da categoria e da resposta sugerida retornada pelo backend.
- Interface limpa e responsiva para uma fácil utilização.

## 🚀 Deploy do Backend

O backend desta aplicação, responsável por processar e classificar os emails, está implantado na plataforma **Render**.

A API pode ser acessada através da seguinte URL:

**URL:** `https://email-classifier-backend-in7k.onrender.com`

O frontend se comunica com este endpoint para enviar os dados e receber os resultados da classificação.

## ⚙️ Como Rodar a Aplicação Frontend Localmente

Para executar o frontend em sua máquina local e interagir com o backend, siga os passos abaixo.

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1.  **Clone o repositório do projeto:**
    ```bash
    git clone https://github.com/seu-usuario/email_classifier_frontend.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd email_classifier_frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn start
    ```

5.  **Abra o navegador:**
    A aplicação será aberta automaticamente em `http://localhost:3000`. Agora você pode usar o formulário para testar a classificação de emails!