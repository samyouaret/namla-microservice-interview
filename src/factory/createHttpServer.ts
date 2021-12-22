import ApplicationGateway from '../contracts/ApplicationGateway'
import HttpServerGateway from '../HttpServerGateway'

export function createHttpApp (): ApplicationGateway {
  const httpApp = new HttpServerGateway()

  return httpApp
}
