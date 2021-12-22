import ApplicationGateway from "./contracts/ApplicationGateway";
import initiable from "./contracts/Initiable";
import Startable from "./contracts/Startable";

interface ApplicationConfig {
    appGateway: ApplicationGateway
}

class Application implements initiable, Startable {
    private readonly appGateway: ApplicationGateway;
    private readonly config: ApplicationConfig;

    constructor(config: ApplicationConfig) {
        this.appGateway = config.appGateway;
        this.config = config;
    }

    /**
     * A initial method to load application config,services,controllers
     */
    async init(): Promise<any> {
        this.appGateway.init();
        console.log("init application");
    }

    /**
     * A starter method to start application, and the application gateway
     */
    async start(): Promise<any> {
        await this.init();
        console.log("start application");
    }
}

export default Application;