# DESAFIO VAGAS.COM

Neste projeto, foram utilizadas as seguintes ferramentas:

[![tools](https://skillicons.dev/icons?i=vite,js,html,css,cypress,git,github)](https://skillicons.dev)

## Pré-Requisitos

Versão mínima Node: `V18.19.0`. [Instalação Node](https://nodejs.org/en)

## Instalação

1. Clone o repositório:

```bash
git clone git@github.com:cpwaldow/front-end-challenge-vagas.com.git
```

2. Navegue até o repositório do projeto:

```bash
cd front-end-challenge-vagas.com
```

3. Instale as dependências usando o npm:

```bash
npm install
```

## Executando o projeto localmente

Para executar o projeto localmente é preciso rodar o comando:

```bash
npm run dev
```

## Executando Testes

Para executar os testes, você pode utilizar os seguintes comandos:

- Modo de Teste de Headless (execução rápida):

```bash
npm test
```

- Modo de Teste Interativo (Cypress Open):

```bash
npm run cypress:open
```

⚠️ Para conseguir executar os testes, é necessário que o servidor esteja rodando junto, basta rodar o comando do passo anterior: `npm run dev`

### Arquivos de testes

Os testes se encontram dentro do diretório `./cypress/e2e/`

## Deploy

Esse projeto está hospedado na [Vercel](https://vercel.com/) e o deploy é feito via CLI (Command-Line Interface) com o comando:

```bash
npm run deploy
```

Obs: O script de deploy tem o build do projeto, garantindo que apenas um comando execute o processo de build e ao final realiza o deploy em produção.

## Boas práticas

### Commits

Para realizar commits neste projeto, há a necessidade de seguir a padronização do [git-commit-msg-linter](https://github.com/legend80s/git-commit-msg-linter)

### Lint

Este projeto possui Eslint e Stylelint configurados já com scripts configurados, use os seguintes comandos:

- `npm run lint`
- `npm run stylelint`
