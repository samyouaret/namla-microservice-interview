import Application from '../../Application'
import express, { Router } from 'express'
import createJsonStore from '../../factory/createJsonStore'
import OrderService from '../../services/OrderService'
import OrderRepository from '../../repositories/OrderRepository'

export default async function ordersRoutes(app: Application): Promise<Router> {
  const store = createJsonStore('orders')
  await store.init()
  const repository = new OrderRepository(store)
  const orderservice = new OrderService(repository)
  const router = express.Router()


  /**
   * @openapi
   * /orders:
   *   get:
   *     summary: Retrieve a list of orders.
   *     description: Retrieve list to show all orders made along with their related data like products and users.
   *     responses:
   *       200:
   *         description: A list of orders.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       id:
   *                         type: integer
   *                         description: The order ID.
   *                         example: 1
   *                       amount:
   *                         type: string
   *                         description: Money amount of order in usd.
   *                         example: "$12.86"
   *                       complete:
   *                         type: boolean
   *                         description: status of completness of an order.
   *                         example: false,true
   *                       created_at:
   *                         type: string
   *                         description: valid string date.
   *                         example: "12/4/2021"
   *                       user_id:
   *                         type: integer
   *                         description: User id related to the order.
   *                         example: 1
   *                       product_id:
   *                         type: integer
   *                         description: Product id related to the order.
   *                         example: 1
   */
  router.get('/api/orders', async (req: express.Request, res: express.Response): Promise<void> => {
    const orders = await orderservice.getAll()
    res.json({ data: orders })
  })

  /**
   * @openapi
   * /orders/{id}:
   *   get:
   *     summary: Retrieve an order by id.
   *     description: Retrieve a specific  order with its related data like product and user.
   *     responses:
   *       200:
   *         description: A list of orders.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                   id:
   *                     type: integer
   *                     description: The order ID.
   *                     example: 1
   *                   amount:
   *                     type: string
   *                     description: Money amount of order in usd.
   *                     example: "$12.86"
   *                   complete:
   *                     type: boolean
   *                     description: status of completness of an order.
   *                     example: false,true
   *                   created_at:
   *                     type: string
   *                     description: valid string date.
   *                     example: "12/4/2021"
   *                   user_id:
   *                     type: integer
   *                     description: User id related to the order.
   *                     example: 1
   *                   product_id:
   *                     type: integer
   *                     description: Product id related to the order.
   *                     example: 1
   *       404:
   *         description: Target order not found.
   */
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
