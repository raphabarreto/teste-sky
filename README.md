<h1 align="center">
  <img alt="Sky Logo" title="#delicinha" src=".github/sky-logo.png" width="350px" />
  <br/>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/raphabarreto/teste-sky">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/raphabarreto/teste-sky">

  <a href="https://github.com/raphabarreto/teste-sky/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/raphabarreto/teste-sky">
  </a>

  <a href="https://github.com/raphabarreto/teste-sky/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/raphabarreto/teste-sky">
  </a>

  <a href="https://github.com/raphabarreto/teste-sky/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a>

  <a href="https://app.netlify.com/sites/teste-sky-raphaelbarreto/deploys">
    <img alt="License" src="https://api.netlify.com/api/v1/badges/4d73975b-ef60-4539-88dc-8924d6161bb5/deploy-status">
  <a>
</p>


<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<br>


---

# 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e metodologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Redis](https://redis.io/)
- [Celebrate](https://github.com/arb/celebrate)
- [JWT](https://jwt.io/introduction/)
- [Test Driven Design](https://en.wikipedia.org/wiki/Test-driven_development)
- [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)

---
# 💻 Projeto
Esta aplicação é baseado em um teste de avaliação pela SKY, contendo **03 funcionalidades**:

- Sign Up
- Sign In
- Buscar usuário
---

# 🔨 Backend
<h4 align="center"> Clique no botão abaixo para importar todo o workspace atráves do Insomnia para consumir os dados na API</h4>
<h1 align="center">
<a href="https://insomnia.rest/run/?label=Sky-API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fraphabarreto%2Fteste-sky%2Fmain%2FSKY-Insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</h1>

## 🔥 Instalação

```bash
# Clone este repositório
$ git clone git@github.com:raphabarreto/teste-sky.git

# Navegue para a pasta raiz do projeto e instale as dependências:
$ yarn install

# Crie os seguintes contâiners no docker:
$ docker run --name database -e POSTGRES_PASSWORD=[DB_PASS] -p [PORT]

$ docker run --name redis -p [PORT]:[PORT] -d -t redis:alpine

# Execute as migrations:
$ yarn typeorm migration:run

# Depois disso, execute o seguinte script:
$ yarn dev:server
```

- Lembrando que é necessário renomear o arquivo .env.example para .env e assim colocar as suas devidas variáveis de acordo com seu ambiente;
---
## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

---


## 🧾 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💗 by [Raphael Barreto](https://bit.ly/contato-linkedin)
