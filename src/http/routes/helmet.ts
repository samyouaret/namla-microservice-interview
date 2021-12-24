import type Application from '../../Application'
import helmet from "helmet"
import type HttpServerGateway from '../HttpServerGateway';

export default function helmetRoutes(app: Application): void {
    let server = (app.getAppGateway() as HttpServerGateway).getServer();
    server.use(helmet());
}