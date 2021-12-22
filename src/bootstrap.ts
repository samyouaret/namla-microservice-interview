import Application from './Application'
import { createHttpApp } from './factory/createHttpServer'

export async function bootstrap (): Promise<void> {
  const appGateway = createHttpApp()
  const app = new Application({ appGateway })
  await app.start()
}
