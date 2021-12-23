import { Express } from 'express'
import initiable from './contracts/Initiable'
import Startable from './contracts/Startable'

interface ExpressConfig {
  port: number | string
  host: string
}

class HttpServerGateway implements initiable, Startable {
  private readonly config: ExpressConfig
  private readonly server: Express

  constructor (server: Express, config: ExpressConfig) {
    this.config = config
    this.server = server
  }

  /**
     * A initial method to load ServerGateway controllers
     */
  async init (): Promise<any> {
    console.log('initiating Http server')
  }

  /**
     * A starter method to start ServerGateway
     */
  async start (): Promise<any> {
    console.log('starting Server')
    this.server.listen(this.config.port, () => {
      console.log(`server listening ⚡️ at ${this.config.host}:${this.config.port}`)
    })
  }
}

export default HttpServerGateway
