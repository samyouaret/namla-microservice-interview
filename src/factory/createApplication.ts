import Application from '../Application';
import { createHttpApp } from './createHttpServer';

export default function createRootApp() {
    let appGateway = createHttpApp();
    let app = new Application({ appGateway });

    return app;
}