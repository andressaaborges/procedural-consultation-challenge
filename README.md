<h1 align="center"> Desafio: Consulta Processual

<br/>

###

### 🔹 Introdução

Este é o repositório do projeto Consulta Processual.
Abaixo, encontra-se o passo a passo para rodar o projeto e os testes.

A documentação completa - com detalhes do processo de desenvolvimento você encontra em [COMMENTS.md](https://github.com/andressaaborges/procedural-consultation-challenge/blob/main/COMMENTS.md).

#

### 🔹 Como Executar o Projeto Frontend

Considerando que tem o Node.js instalado conforme descrito, siga os passos:

**1. Clone o repositório:**

```bash
git clone https://github.com/andressaaborges/procedural-consultation-challenge-frontend.git

```

**2. Navegue até o diretório raiz do projeto e instale as dependências do projeto:**
   
```bash
npm install

```

**3. Crie uma cópia do arquivo `.env.sample` na raiz do projeto e renomeie para `.env.local`;**

**4. Inicie o servidor de desenvolvimento:**

```bash
npm run dev

```

**5. Abra seu navegador e acesse http://localhost:3000.**

#

### 🔹 Como Rodar os Testes em Cypress

> **O servidor frontend precisa estar rodando**

1.  Na raiz do diretório frontend, execute:

```bash
npm cypress install
npm cypress open

```

2. Irá abrir uma janela do Cypress. Espere, por gentileza, terminar de carregar;
3. Depois de carregar a janela, selecione a opção `E2E Testing`;
4. Depois, selecione a opção `Chrome` e clique em `Start E2E Testing in Chrome`;
5. Irá abrir uma janela no `Chrome`, selecione `process-display.cy.ts`
6. Os testes serão carregados;
7. **Atenção!** Os testes podem falhar na 1ª ou 2ª tentativa devido o tempo de execução, por isso sempre rode o teste mais de uma vez. Não significa que há erros nos testes.

#

### 🔹 Como Rodar a Pipeline CI no GitHub Actions

A pipeline CI é acionada automaticamente a cada novo commit no repositório do projeto frontend. Os testes são executados automaticamente durante a pipeline CI.

#

### 🔹 Link da API 

O repositório backend se encontra neste link: [Repositório Backend](https://github.com/andressaaborges/procedural-consultation-challenge-api).

A API está deployada na plataforma Vercel e pode ser acessada através do seguinte link: [Procedural Consultation Challenge API](https://procedural-consultation-challenge-api.vercel.app).



#

<p><strong>Andressa Borges</strong> - Software Developer
<br/>www.linkedin.com/in/andressaaborges</p>