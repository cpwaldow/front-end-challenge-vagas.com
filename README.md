# Desafio Front-end VAGAS.com

Seja bem-vindo, tripulante!

Este repositório é minha resolução do desafio Front-end para VAGAS.com, você pode ter acesso ao repositório original [clicando aqui](https://github.com/VAGAScom/front-end-challenge).

## Stack

Este projeto utiliza [Vite](https://vitejs.dev/) como bundler, com JavaScript Vanilla, HTML e CSS.

## Rodando o projeto localmente

Você precisa ter o node instalado no seu computador, e que tenha pelo menos a versão 18. Para verificar se existe o node no seu computador, pode rodar o comando `node --help`. Para verificar a versão do node, utilize o comando `node --version`, o retorno deverá ser algo similar a isto: `v18.19.0`.

Depois de verificar o node, basta clonar o projeto, adentrá-lo e instalar as dependências:

```shell
 git clone git@github.com:cpwaldow/front-end-challenge-vagas.com.git

 cd front-end-challenge-vagas.com

 npm i
```

Depois de executar todos os passo acima, basta rodar o comando `npm run dev` para ter acesso à aplicação no localhost.

## Boas práticas

### Commits

Para realizar commits neste projeto, há a necessidade de seguir a padronização do [git-commit-msg-linter](https://github.com/legend80s/git-commit-msg-linter)

### Lint

Este projeto possui Eslint e Stylelint configurados já com scripts configurados, use os seguintes comandos:

- `npm run lint`
- `npm run stylelint`
