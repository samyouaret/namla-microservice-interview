# Namla microservice interview

![ci tests](https://github.com/samyouaret/namla-microservice-interview/actions/workflows/test-ci.yml/badge.svg)

A proposed implementation of a  microservice to serve suppliers and orders data over an HTTP REST API.

For a quick review of the API, you can access the [Demo](http://20.127.55.150:3000/api) server.

## Tracking the application progress

To track the progress of this project, I set up a simple agile(scrum) dashboard on Azure DevOps  on this link [Azure DevOps](https://dev.azure.com/samyouaret13/namla-interview).

## Running the application

For a quick setup, the application can be built and run with **Docker** and `docker-compose`, building the application image.

### Using Docker

    docker build -t order-service .

Run the application

    docker run -dp 3000:3000 order-service

### Using docker-compose

To run the it with docker-compose

    docker-compose up -d

to shut down the application just run

    docker-compose down

If constantly pulling change from this repository remember to re-build your image by running 

    docker-compose build 
    
So you can avoid stale builds, Then you can run

    docker-compose up -d

### Application endpoints

The application should be server on port `3000` where the host in local is  [api](https://localhost:3000)

All Endpoints are served with the prefix `/api/`, There are four endpoints:

1. Get all suppliers `/api/suppliers`.
2. Get a supplier by id `/api/suppliers/<id:int>`.
3. Get all orders `/api/orders`.
4. Get an order by id `/api/orders/<id:int>`.

For a quick start, A swagger documentation is found on your local host after running the application [api docs](https://localhost:3000/api/docs).

A Basic **Postman** collection is available in `docs/postman`, import to postman so you can quickly interact the endpoints.

**Note**: the documentation of endpoints has not finished yet.

## Application structure

While making it work is good, making it maintainable and testable is more important. The application structure is a layered architecture with respect to the **SOLID** principles.

Each layer serves a specific purpose, the ultimate goal is the make each layer replaceable and testable on its own without the need for setting up the application.

Testability for just enough purpose is maintained in the application architectures, Built-in quality is a must, it is not a luxury. 

In summary, this application should allow us at least to do the following steps without breaking down the application.

1. We can Test all parts in isolation.
2. Any Part(usually a layer) should be replaceable.
3. we should not struggle with refactoring.
4. Databases, and HTTP servers are just details.

Regrading the fourth(4) point the goal is the delay decisions 
about HTTP servers, databases choices, they should be pluggable into our architecture, not a dependency.

We talked too much so far, the picture below represents the application structure.


![Application architecture ](./docs/images/application-architecure.svg)


Describing the Application architecture, we can see the HTTP server acts just as a **Gateway** for our application, it is not a dependency by itself, Actionly it was the last thing to implement and add the end-to-end testing for the endpoints.

Controllers interact with Application Gateway(HTTP server), and **service**, it uses services to serve those requests.
Services hold the business logic, although our application has only a few concerns at the moment all business logic should happen in services.

**Repositories** Acts as the **gateway** to access data, it uses Stores(it could be a database as well as it could a file system or in-memory data), Datastore should be replaceable.

To keep dependency as low as possible, the dependency injection follows one direction from Top to down, Contracts(interface) should be set the boundaries and relationships between each layer.

Back to the root application, it is the starting point to run the application, it manages an **Application gateway** which in our case is the HTTP server.


As a concrete example of an HTTP server, we are using **expressjs**.

## Automated tests

Writing automated tests and adding Continuous integration adds more confidence to our application, the test environment is already set up, each pull_request or push to the repository triggers a workflow to run our tests.

## Decomposing Project folder structure

All the project code resides in the `src` folder, it is written in typescript, when building the project a `build` folder is produced containing transpiled javascript.

Typescript has more type-safety than javascript, it helps to show more semantics in code, also interfaces help us define our boundaries and abstraction.

```
src
├── Application.ts
├── bootstrap.ts
├── config
│   └── server.config.ts
├── contracts
│   ├── ApplicationGateway.ts
│   ├── Initiable.ts
│   ├── Startable.ts
│   └── StoreInteface.ts
├── database
│   ├── InMemoryStore.ts
│   └── JsonStore.ts
├── factory
│   ├── createApplication.ts
│   ├── createHttpServer.ts
│   ├── createInMemoryStore.ts
│   └── createJsonStore.ts
├── helpers
├── http
│   ├── HttpServerGateway.ts
│   └── routes
├── index.ts
├── repositories
│   ├── OrderRepository.ts
│   └── SupplierRepository.ts
├── services
│   ├── OrderService.ts
│   └── SupplierService.ts
└── tests
    ├── e2e
    │   ├── orders.test.ts
    │   └── suppliers.test.ts
    └── unit
        └── services
            ├── orders.test.ts
            └── suppliers.test.ts
```

the `Application` is the starting point of the application,` bootstrap file and index help us just for a clean setup of the application.

`contracts` folder defines interface as a mechanism to decouple layers.

`factories` are functions that build different application components, like application, HttpServer, Database Stores.

All business logic is found in the `services` folder, each business has its corresponding service.

Accessing data is done via `repositories` that use `stores` in the `database` folder.

`config` and `helpers` give a more clean approach to reuse some functions and configurations.

`http` folder contains the HttpGateway server with routes.

`tests` contains tests for our application components, each nested test folder has a correspondent run command eg. `yarn run test:2e2`.

## Development Part

If you want to get your hand dirty, you can start by cloning this repository

    git clone https://github.com/samyouaret/namla-microservice-interview.git

you can use the same instructions as in the Running the application section or install `nodejs` and yarn (recommended) and you are ready to go.

To run tests

    yarn run test

You can run only units tests

    yarn run test:unit

The same could be applied to run E2E tests

    yarn run test:e2e
