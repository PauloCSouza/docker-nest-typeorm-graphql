<h1 align="center">Docker + NestJS + TypeORM + GraphQL + MongoDB</h1>
<p align="center">Simples aplicação que tem como objetivo utilizar containers para rodar uma API com NestJS no BackEnd, NextJS com Apollo no FrontEnd e MongoDB como Banco de Dados.</p>

<hr>

## Requisitos funcionais

- [ ] Registro do usuário utilizando e-mail e senha
- [ ] Login do usuário utulizando e-mail e senha
- [ ] O usuário precisa ser capaz de publicar um poema (Front-end)
- [ ] O usuário precisa ser capaz de apagar um poema (Front-end)
- [ ] Novos poemas podem ser listados em tempo real (Front-end)
- [ ] Adicionar suporte Swagger
- [ ] Integração DataLoader

## Regras do negócio

- [ ] O poema só pode ser excluido pelo próprio autor
- [ ] Em construção...

## Requisitos não Funcionais

- [x] Nest.js
- [X] GraphQL
- [X] TypeORM
- [x] MongoDB
- [ ] NextJS + Apollo

## Dependências

- [Docker](https://www.docker.com/)

## Para iniciar

1. Clone este repositório;<br />
2. Execute `docker-compose up -d` para criar os containers e instalar as dependências.<br />
3. Acesse `localhost:3000` em seu navegador.<br />

## Contribuindo

Por favor, leia [CONTRIBUTING.md](CONTRIBUTING.md) para obter detalhes sobre nosso código de conduta e o processo de envio de solicitações pull.