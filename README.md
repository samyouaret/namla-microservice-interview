# Namla microservice interview

## Tracking the application progress

The dashboard to track the progress of this project is
found on this link [Azure DevOps](https://dev.azure.com/samyouaret13/namla-interview).

## Running the application

For a quick setup, the application can be run with Docker, building the application image.

    docker build -t order-service .

Running the application

    docker run -dp 3000:3000 order-service