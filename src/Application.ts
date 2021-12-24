import ApplicationGateway from './contracts/ApplicationGateway'
import initiable from './contracts/Initiable'
import Startable from './contracts/Startable'

interface ApplicationConfig {
  appGateway: ApplicationGateway
}

class Application implements initiable, Startable {
  private readonly appGateway: ApplicationGateway
  private readonly config: ApplicationConfig

  constructor(config: ApplicationConfig) {
    this.appGateway = config.appGateway
    this.config = config
  }

  /**
     * An initial method to init application gateway
     * any initial setup could be done here
     */
  async init(): Promise<any> {
    console.log('init application')
    await this.appGateway.init(this)
  }

  getAppGateway(): ApplicationGateway {
    return this.appGateway
  }

  /**
  * A starter method to start application, and the application gateway
  */
  async start(): Promise<any> {
    console.log('start application')
    await this.appGateway.start()
  }
}

export default Application
