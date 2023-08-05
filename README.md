# graphql-nestjs

This proyect is a graphql using NestJs framework, implementing clean architecture (onion architecture) 
in NodeJs.
It consumes some REST API from torre.co and expose the same functionalities in the resolver   


<center><img src="https://graphql.org/img/logo.svg" width="400" height="400"> <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" width="400" height="400"></center>

---

## Components

1. Data layer:
   This layer contains all classes and modules in charge of consuming data
   generally here stay services, DAO's and Repositories.

2. Core layer:
   Here entities or models and use-cases, .

3. Resolver's layer:
   Here are the resolver's and another web components, which expose the services.

---

## To Run

1. To start postgres container, execute in ./

   npm run docker:init

2. To run Graphql API, execute in ./api/

   npm run start:dev

---

## Soporte

For support contact jonathan.marin.c@gmail.com

## Stay in touch

- Autor - [Jonathan Marin](https://fr.wikipedia.org/wiki/Jonathan_Mar%C3%ADn)
- Repos:  [GitLab](https://gitlab.com/Taufiq)
          [GitHub](https://github.com/Anceloth)


   
   
   


