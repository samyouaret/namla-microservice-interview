import createInMemoryStore from '../../../factory/createInMemoryStore'
import OrderRepository from '../../../repositories/OrderRepository'
import OrderService from '../../../services/OrderService'

const memoryStore = createInMemoryStore('orders')
const orderRepository = new OrderRepository(memoryStore)
const orderService = new OrderService(orderRepository)

beforeAll(async () => {
  await memoryStore.init()
})

test('Can get all orders', async () => {
  const orders = await orderService.getAll()
  expect(orders).toBeDefined()
  expect(orders.length).not.toBe(0)
})

test('Can get correct order by id', async () => {
  const order = await orderService.getById(1)
  expect(order).not.toBeNull()
  expect(order.id).toBe(1)
  expect(order.complete).toBeDefined()
  expect(order.user_id).toBeTruthy()
  expect(order.product_id).toBeTruthy()
  expect(order.amount).toBeTruthy()
})
