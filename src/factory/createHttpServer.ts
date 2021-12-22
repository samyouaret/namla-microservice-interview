import HttpServerGateway from "../HttpServerGateway";

export function createHttpApp() {
    let httpApp = new HttpServerGateway();

    return httpApp;
}