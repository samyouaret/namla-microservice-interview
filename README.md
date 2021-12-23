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


