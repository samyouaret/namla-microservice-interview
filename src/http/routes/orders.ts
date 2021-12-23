import Application from '../../Application'
import express, { Router } from 'express'
import createJsonStore from '../../factory/createJsonStore'
import OrderService from '../../services/OrderService'
import OrderRepository from '../../repositories/OrderRepository'
import { send } from 'process'

export default async function ordersRoutes(app: Application): Promise<Router> {
  const store = createJsonStore('orders')
  await store.init()
  const repository = new OrderRepository(store)
  const orderservice = new OrderService(repository)
  const router = express.Router()

  router.get('/api/orders', async (req: express.Request, res: express.Response): Promise<void> => {
    const orders = await orderservice.getAll()
    res.json(orders)
  })

  router.get('/api/orders/:id', async (req: express.Request, res: express.Response): Promise<void> => {
    const order = await orderservice.getById(+req.params.id)
    if (order === null) {
      res.sendStatus(404)
      return
    }
    res.json(order)
  })

  return router
}
