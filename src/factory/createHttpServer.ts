import { serverConfig } from '../config/server.config'
import ApplicationGateway from '../contracts/ApplicationGateway'
import HttpServerGateway from '../http/HttpServerGateway'
import express from 'express'

export function createHttpApp (): ApplicationGateway {
  const server = express()
  const httpApp = new HttpServerGateway(server, serverConfig)

  return httpApp
}
