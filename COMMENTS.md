# Documentação do Desafio: Consulta Processual

## Introdução

Este é o repositório do projeto Consulta Processual, um desafio técnico desenvolvido para medir habilidades em desenvolvimento fullstack. O objetivo principal é criar um sistema de consulta processual que permita aos usuários pesquisar processos com base em seu número unificado (CNJ) e visualizar os detalhes de cada processo encontrado.

## Descrição do Projeto

O projeto consiste em duas páginas principais:

1. Uma página de consulta processual (busca);
   - Pode ser acessada via http://localhost:3000/
2. Uma página de processos (exibição).
   - Pode ser acessada via http://localhost:3000/process/[inserir-cnj-do processo]
   - Link de exemplo: http://localhost:3000/process/8500235-12.2019.4.05.8000

## Tecnologias Utilizadas:

- **Node.js**
- **ReactJS**
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Zod**
- **Cypress**
- **ESlint**
- **React Hook Form**

A aplicação foi desenvolvida utilizando Next.js no frontend e uma API no backend também em Next.js/Node.

## Etapas do Projeto

### 1. Análise e Planejamento

- **Leitura e Análise da Descrição do Desafio:**
Inicialmente, li cuidadosamente a descrição do desafio, analisando as necessidades e requisitos estabelecidos. 

- **Rascunho do Layout e Arquitetura do Projeto:**
Com base nas informações fornecidas no desafio, fiz um rascunho do layout da aplicação e esbocei a arquitetura do projeto. Isso incluiu a pré-definição da estrutura de pastas, a componentização, design do frontend e as necessidades do backend.

- **Considerações sobre Tempo, Qualidade e Escalabilidade:**
Levei em consideração o tempo para a conclusão do projeto, bem como a qualidade de código, escalabilidade e manutenibilidade. Esses aspectos foram fundamentais para guiar minhas decisões durante o desenvolvimento.

### 2. Configuração do Projeto e Setup Inicial

- **Framework Utilizado**: Next.js
Optei por utilizar o Next.js com Server Components devido à sua robustez e capacidade de renderização no servidor. Esta escolha foi motivada pela necessidade de criar funcionalidades como busca, página de processo e busca por tribunal. O Next.js Pages Router foi selecionado como o mecanismo de roteamento, pois simplifica a organização das rotas da aplicação.

E além disso, o Next.js é recomendado pelo React desde 2023 na documentação oficial, então existe a garantia de estar se utilizando um framework robusto.

- **Utilização de Dados Fakes**: Para acelerar o desenvolvimento inicial e garantir a disponibilidade de dados consistentes, optei por utilizar um arquivo JSON chamado `data.json` pré-populado na pasta do projeto.

- **Configuração de Dependências**: Instalei as dependências necessárias para o projeto, e configurei o ambiente de desenvolvimento para garantir qualidade e consistência no código, como o ESLint, seguindo as boas práticas de desenvolvimento.

### 3: Criação do Layout Base da Aplicação

- **Organização**: Iniciei o desenvolvimento criando um layout base para a aplicação. O layout foi projetado de forma a ser aplicado em todas as páginas, mantendo uma consistência visual em toda a aplicação.

Para garantir a escalabilidade e facilidade de manutenção, adotei uma abordagem modular na organização do layout, além da componentização. Criei pastas dentro da pasta `/src/app` para agrupar arquivos relacionados a um mesmo grupo de rotas. Essa estrutura facilita a adição de novas funcionalidades e a manutenção do código no futuro.

Utilizei também componentes reutilizáveis para criar o layout base, como o Header, que está disponível em todas as páginas.

- **Considerações sobre a Estrutura**: Durante a criação do layout, adotei padrões de design que visam proporcionar uma experiência de usuário consistente e agradável. Isso incluiu a escolha de cores, tipografia e elementos visuais que se alinham com a identidade visual da aplicação.

Verifiquei a responsividade do layout em diferentes dispositivos e resoluções de tela, entretanto não fiz ajustes mais refinados porque no objetivos da descrição da aplicação não inclui ser testado em mobile.

### 4: Definição da Arquitetura do Projeto

- **Arquitetura de Microsservices**: Optei por adotar a arquitetura de projeto dividida em dois repositórios separados: um para o backend e outro para o frontend. Essa abordagem facilita a manutenção, o desenvolvimento e a escalabilidade do projeto, pois permite que cada parte seja gerenciada de forma independente.

- **Padrão BFF (Backend for Frontend)**: Aproveitei o conceito de BFF oferecido pelo Next.js, que permite a criação de um backend dedicado para atender especificamente às necessidades do frontend. Isso possibilita uma separação clara de responsabilidades entre o frontend e o backend, garantindo maior flexibilidade e modularidade no desenvolvimento.

### 5: Integração com a API e Manipulação de Dados

- **Utilização da Fetch API e Variáveis de Ambiente**: Em vez de usar o Axios, utilizei a Fetch API do navegador, que é estendida pelo Next.js para adicionar funcionalidades como caching. Criei um arquivo `api.ts` para definir uma função que executa a Fetch API com base em uma URL de base e uma URL específica. Também configurei variáveis de ambiente para armazenar a URL de base da API. Utilizei o `Zod` para validar e transformar as variáveis de ambiente. Por fim, importei as variáveis de ambiente para usar a função api para carregar os dados na rota. 

- **Uso do Cache para Evitar Requisições Duplicadas:**: Utilizei as propriedades de controle de cache do Next.js para evitar requisições duplicadas. O Next.js oferece opções como `force-cache`, que permite cachear uma requisição, `no-store`, que impede o cache, e `revalidate`, que define um tempo em segundos para atualizar o cache da requisição. Optei por utilizar o revalidate com um tempo para garantir a atualização periódica dos dados em cache.

### 6: Adição de Componentes de Carregamento

- **Criação da Página de Carregamento `loading`**: Desenvolvi uma página de carregamento (loading) para a aplicação. Essa página é essencial para proporcionar uma experiência mais agradável ao usuário durante o carregamento de conteúdo assíncrono, as requisições HTTP. A presença da página de carregamento ajuda a indicar visualmente que a aplicação está em processo de carregamento e que o usuário deve aguardar.

Para isso, desenvolvi um componente chamado `skeleton`. 

### 7: Implementação da Página de Exibição de Processo

- **Criação da Página de Exibição de Processo**: Desenvolvimento da página de exibição de processo (process-display) para exibir os detalhes de um processo específico.
  
- **Criação de Rota na API**: Criei uma rota na API para buscar detalhes de um único processo com base no número CNJ. Implementei um handler para essa rota, onde validei se o parâmetro CNJ é uma string e no formato desejado.  `generateMetadata` para retornar parâmetros específicos para cada página de processo com o número CNJ.

Na página de exibição de processo no Front, utilizei a função generateMetadata para retornar parâmetros específicos para cada página de processo com base no número CNJ. Além de ser uma prática que melhora o SEO, ajuda o usuário a se localizar com as abas abertas.

### 8: Implementação da Página de Busca

- **Criação da Página de Busca**: Desenvolvi a página de busca na aplicação, que permite aos usuários buscar processos com base no número CNJ. Essa página contém um formulário de busca, onde os usuários podem inserir o número CNJ e pressionar Enter ou no botão para realizar a busca. 
  
Implementei também no front uma validação para garantir que a busca só seja feita quando o usuário inserir um número CNJ válido.

Quando o número CNJ está no formato correto, realizo uma requisição à API para buscar os dados do processo correspondente. Se o processo existir, retorno os dados para a página de exibição do processo. Caso contrário, exibo uma mensagem informando que o processo não foi encontrado.

### 9: Adição de Testes End-to-End

- **Testes End-to-End com Cypress**: Optei somente pelos testes end-to-end por conta do tempo. Considero efeciente porque é capaz de simular a navegação de um usuário na aplicação, testando a interface e as ações que um usuário comum faria, garantindo que o comportamento da aplicação se mantenha conforme novas features são adicionadas.
  
Não implementei os testes unitários utilizando o próprio Cypress porque, pra mim, essa ferramenta não tem ainda uma documentação muito clara e muito atualizada de usar o Cypress junto a estrutura de código que estou utilizando.

### 10: Configuração do Workflow de CI

- **Configuração do GitHub Actions e Deploy da API:** Configurei um workflow no GitHub Actions para rodar os testes a cada novo commit e contribuir para a garantia da qualidade e estabilidade da aplicação, permitindo a detecção precoce de problemas e a entrega contínua de novas funcionalidades.

Além disso, fiz o deploy da API na plataforma Vercel, deixando a API online e facilitando a execução dos testes e2e usando cypress.

### Próximos Passos

#### O que eu implementaria caso tivesse mais tempo:

- **Ajustes nas Variáveis de Ambiente:**
  - **Objetivo:** Diferenciar as variáveis de ambiente do servidor e do cliente para melhorar a segurança e organização da aplicação e deixá-la mais preparada para prod.
    - **Ajustes Planejados:**
        Utilizar o pacote `t3-env` para facilitar a diferenciação entre as variáveis de ambiente do servidor e do cliente.
    - **Observações:**
        Houve uma tentativa de implementação desses ajustes, porém, enfrentei erros inesperados que demandaram tempo considerável para solucionar. Optei por remover temporariamente essa implementação para evitar atrasos no projeto, levando em conta que será testado em ambiente dev.

  - **Filtro de Busca por Tribunal:** 
    - **Objetivo:** Implementar a funcionalidade de busca por tribunal, permitindo que os usuários filtrem os processos com base no tribunal selecionado.
    - **Lógica Planejada:**
        Eu criei uma rota na API que retorna todos os casos de um tribunal específico, sem validação, com base em um parâmetro fornecido.
        No frontend, quero fazer uma requisição para obter todos os casos e extrair os tribunais únicos cadastrados.
        Utilizar os tribunais únicos para preencher as opções de um componente de seleção (select).
        Quando o usuário selecionar um tribunal, fazer uma nova requisição para buscar os processos desse tribunal e exibi-los na página com o nº CNJ e alguns detalhes.
        Ao clicar em um dos processos exibidos, ser redirecionado para a página do processo com todas as informações. 
    - **Implementação Planejada:**
        Utilizar `Zustand` ou `Context API` para gerenciar o estado relacionado aos tribunais e aos processos filtrados.
        Criar componentes para exibir a lista de tribunais e permitir a seleção de um tribunal.
        Atualizar a exibição dos processos conforme o tribunal selecionado pelo usuário.
    - **Observações:**
        Foram feitas tentativas de implementação usando Zustand e Context Provider para gerenciar o estado entre os componentes, porém ocorreram erros que demandaram tempo para solucionar.
        Segue um rascunho de código que foi desenvolvido para criar essa funcionalidade, porém não foi totalmente integrado devido aos problemas encontrados durante o desenvolvimento.

```typescript

// src/context/case-context.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '@/data/api'
import { Case } from '@/data/types/case'

interface CaseContextType {
  data: Case[]
  uniqueCourts: string[]
  handleCourtChange: (court: string) => void
}

const CaseContext = createContext({} as CaseContextType)

export const useCaseContext = () => {
  const context = useContext(CaseContext)
  if (!context) {
    throw new Error('useCaseContext must be used within a CaseProvider')
  }
  return context
}

interface CaseProviderProps {
  children: React.ReactNode
}

export const CaseProvider: React.FC<CaseProviderProps> = ({ children }) => {
  const [data, setData] = useState<Case[]>([])
  const [uniqueCourts, setUniqueCourts] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const cases = await getData()
      const unique = Array.from(
        new Set(cases.map((caseItem) => caseItem.court)),
      )
      setUniqueCourts(unique)
    }
    fetchData()
  }, [])

  const handleCourtChange = async (court: string) => {
    const response = await api(`/cases/tribunal/${court}`)
    if (response.ok) {
      const newData = await response.json()
      setData(newData)
    }
  }

  return (
    <CaseContext.Provider value={{ data, uniqueCourts, handleCourtChange }}>
      {children}
    </CaseContext.Provider>
  )
}

async function getData(): Promise<Case[]> {
  const response = await api(`/cases/`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Erro desconhecido')
  }

  const cases = await response.json()
  return cases
}

```

```typescript

// src/components/tribunal-select.tsx
export function TribunalSelect() {
  const { uniqueCourts, handleCourtChange } = useCaseContext()

  const handleChange = (court: string) => {
    handleCourtChange(court)
  }

  return (
    <select onChange={handleChange}>
      <option value="">Selecione um tribunal</option>
      {uniqueCourts.map((court) => (
        <option key={court} value={court}>
          {court}
        </option>
      ))}
    </select>
  )
}
```

  - **Rota de Search na API:*** Criação de uma rota na API para busca de processos com base em uma query fornecida no formulário de busca. Utilizaria searchParams, ao invés de params na comunicação. 
  
  - **Rota de Tribunais:** Criação de uma rota na API que retorna somente os tribunais, para utilizar na lógica de buscar pelo filtro de Tribunal. 

  - **Mais cobertura de testes na API e Frontend.** 


### Endpoints da API

##### GET /api/cases

- **Acesse**: https://procedural-consultation-challenge-api.vercel.app/api/cases
- **Descrição**: Recupera uma lista de casos.
- **Método**: GET
- **Resposta**: 
  - `200 OK`: Lista de casos.
  - `404 Not Found`: Caso não encontrado.

##### GET /api/cases/[cnj]

- **Acesse**: https://procedural-consultation-challenge-api.vercel.app/api/cases/5001682-88.2020.8.13.0672
- **Descrição**: Recupera detalhes de um caso específico.
- **Método**: GET
- **Parâmetros**: 
  - `cnj`: Número CNJ do caso.
- **Resposta**: 
  - `200 OK`: Detalhes do caso.
  - `404 Not Found`: Caso não

 encontrado.

##### GET /api/cases/tribunal/[court]

- **Acesse**: https://procedural-consultation-challenge-api.vercel.app/api/cases/tribunal/TJSP
- **Descrição**: Recupera detalhes de um caso específico.
- **Método**: GET
- **Parâmetros**: 
  - `court`:  (Dinâmico) Filtra casos por tribunal.
- **Resposta**: 
  - `200 OK`: Detalhes do caso.
  - `404 Not Found`: Caso não encontrado.


### Testes E2E Implementados

#### 1. Teste: Exibir dados de um processo existente

- **Descrição**: Este teste verifica se a página de exibição de processo é capaz de exibir os dados de um processo existente corretamente.
- **Passos**:
  1. O teste realiza uma busca por um número CNJ de um processo existente (`8500235-12.2019.4.05.8000`).
  2. Verifica se a rota foi redirecionada corretamente para a página do processo.
  3. Verifica se os dados do processo são exibidos corretamente na página.
- **Resultado Esperado**: A página deve exibir os dados do processo especificado corretamente.

#### 2. Teste: Exibir mensagem de erro quando o número do processo é incorreto

- **Descrição**: Este teste verifica se a página de exibição de processo exibe corretamente uma mensagem de erro quando o formato do número CNJ do processo fornecido é incorreto.
- **Passos**:
  1. O teste realiza uma busca por um número CNJ de formato incorreto (`123456789`).
  2. Verifica se a rota permanece na página inicial.
  3. Verifica se a mensagem de erro é exibida corretamente na página inicial.
- **Resultado Esperado**: A página inicial deve exibir uma mensagem de erro indicando que o número do processo é inválido.

#### 3. Teste: Exibir mensagem quando o processo não é encontrado na API

- **Descrição**: Este teste verifica se a página de exibição de processo exibe corretamente uma mensagem quando o número do processo fornecido não é encontrado na API.
- **Passos**:
  1. O teste realiza uma busca por um número CNJ (de formato correto) que não existe na API (`0000000-00.0000.0.00.0000`).
  2. Verifica se a rota foi redirecionada corretamente para a página do processo.
  3. Verifica se a mensagem de `processo não encontrado` é exibida corretamente na página.
- **Resultado Esperado**: A página deve exibir uma mensagem indicando que o processo não foi encontrado na API.


### Como Executar o Projeto Frontend

Considerando que tem o Node.js instalado conforme descrito, siga os passos:

1. Clone o repositório:

```bash
git clone https://github.com/andressaaborges/procedural-consultation-challenge-frontend.git

```

2. Navegue até o diretório raiz do projeto e instale as dependências do projeto:
   
```bash
npm install

```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev

```

4. Abra seu navegador e acesse http://localhost:3000.
   

### Como Executar a API

> **A API está deployada, então para realizar os testar da aplicação só necessita rodar o servidor do Frontend**

1. Clone o repositório:

```bash
git clone https://github.com/andressaaborges/procedural-consultation-challenge-api.git

```

2. Navegue até o diretório raiz do projeto e instale as dependências do projeto:
   
```bash
npm install

```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev

```

4. Abra seu navegador e acesse http://localhost:3000.
   
Caso já tenha um servidor rodando, irá abrir em http://localhost:3001.


### Como Rodar os Testes em Cypress

> **O servidor frontend precisa estar rodando**

- Na raiz do diretório frontend, execute:

```bash
npm cypress install
npm cypress open

```


- Irá abrir uma janela do Cypress. Espere, por gentileza, terminar de carregar;
- Depois de carregar a janela, selecione a opção `E2E Testing`;
- Depois, selecione a opção `Chrome` e clique em `Start E2E Testing in Chrome`;
- Irá abrir uma janela no `Chrome`, selecione `process-display.cy.ts`
- Os testes serão carregados;
- **Atenção!** Os testes podem falhar na 1ª ou 2ª tentativa devido o tempo de execução, por isso sempre rode o teste mais de uma vez. Não significa que há erros nos testes.

### Como Rodar a Pipeline CI no GitHub Actions

A pipeline CI é acionada automaticamente a cada novo commit no repositório do projeto frontend. Os testes são executados automaticamente durante a pipeline CI.

### Link da API 

O repositório backend se encontra neste link: [Repositório Backend](https://github.com/andressaaborges/procedural-consultation-challenge-api).

A API está deployada na plataforma Vercel e pode ser acessada através do seguinte link: [Procedural Consultation Challenge API](https://procedural-consultation-challenge-api.vercel.app).

---

**Andressa Borges** - Software Developer