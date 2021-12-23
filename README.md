# Namla microservice interview

## Tracking the application progress

The dashboard to track the progress of this project is
found on this link [Azure DevOps](https://dev.azure.com/samyouaret13/namla-interview).

## Running the application

For a quick setup, the application can be built and run with **Docker** and `docker-compose`, building the application image.

    docker build -t order-service .

Running the application

    docker run -dp 3000:3000 order-service

To run the it with docker-compose

    docker-compose up -d

to shut down the application just run

    docker-compose down

## Application strecture

While making it work is good, making it maintainable and testable is more important. The application structure is a layered architecture with respect to the **SOLID** principles.

Each layer serves a specific purpose, the ultimate goal is the make each layer replaceable and testable on its own without the need for setting up the application.

Testability for just enough purpose is maintained in the application architectures, Built-in quality is a must, it is not a luxury, in summary, this application should allow us at least to do the following steps without breaking down the application.

1. We can Test all parts in isolation.
2. Any Part(usually a layer) should be replaceable.
3. we should not struggle with refactoring.
4. Databases, and HTTP servers are just details.

Regrading the fourth(4) point the goal is the delay decisions 
about HTTP servers, databases choices, they should be pluggable into our architecture, not a dependency.

We talked too much so far, the picture below represents the application structure.

![Application architecture ](./docs/images/application-architecure.svg)
