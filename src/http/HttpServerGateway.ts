import { Express, Router } from 'express'
import Application from '../Application'
import initiable from '../contracts/Initiable'
import Startable from '../contracts/Startable'
import routes from './routes'

interface ExpressConfig {
  port: number | string
  host: string
}

class HttpServerGateway implements initiable, Startable {
  private readonly config: ExpressConfig
  private readonly server: Express
  private context: Application

  constructor(server: Express, config: ExpressConfig) {
    this.config = config
    this.server = server
  }

  /**
     * An initial method to load ServerGateway controllers
     */
  async init(context: Application): Promise<any> {
    console.log('initiating Http server')
    this.context = context
    await this.loadRoutes(this.context)
  }

  async loadRoutes(application: Application): Promise<void> {
    for (const route of routes) {
      let router = await route(application)
      this.server.use(router)
    }
  }

  /**
     * A initial method to load ServerGateway controllers
     */
  getServer(): Express {
    return this.server
  }

  /**
     * A starter method to start ServerGateway
     */
  async start(): Promise<any> {
    console.log('starting Server')
    this.server.listen(this.config.port, () => {
      console.log(`server listening ⚡️ at ${this.config.host}:${this.config.port}`)
    })
  }
}

export default HttpServerGateway
