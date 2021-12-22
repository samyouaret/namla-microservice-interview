import Application from './Application';
import { createHttpApp } from './factory/createHttpServer';

export async function bootstrap() {
    let appGateway = createHttpApp();
    let app = new Application({ appGateway });
    await app.start();
}