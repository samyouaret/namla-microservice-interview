import initiable from './contracts/Initiable'
import Startable from './contracts/Startable'

class HttpServerGateway implements initiable, Startable {
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
  }
}

export default HttpServerGateway
