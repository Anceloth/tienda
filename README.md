# graphql-nestjs

This proyect is a graphql using NestJs framework, implementing clean architecture (onion architecture)
in NodeJs.
It consumes some postegress DB and expose some functionalities in the resolver

<center><img src="https://graphql.org/img/logo.svg" width="250" height="250"> <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" width="300" height="300"></center>

---

## Components

1. Service layer:
   This layer contains all classes and modules in charge of consuming data
   generally here stay services, DAO's and Repositories.

2. UseCase layer:
   Here are the bussiness rules, and the mos important logic,

3. Resolver's layer:
   Here are the resolver's and another web components, which expose the services.

4. database's layer
   Here are the Entities, models and things related with DB

5. modules's layer
   Here is just configurations files regarding NESTJS framework

---

## To Run

1. To start postgres container, execute in ./

   `npm run docker:init` or `docker-compose up -d`

2. cd to ./api folder, and install dependencies

   `npm install`

3. To run Graphql API, execute in ./api/

   `npm run start:dev`

4. To load database, cd ../scripts

   execute data.sql

---

## Soporte

For support contact jonathan.marin.c@gmail.com

## Stay in touch

- Autor - [Jonathan Marin](https://fr.wikipedia.org/wiki/Jonathan_Mar%C3%ADn)
- Repos: [GitLab](https://gitlab.com/Taufiq)
  [GitHub](https://github.com/Anceloth)
