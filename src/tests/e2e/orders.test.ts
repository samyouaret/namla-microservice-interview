import Application from '../../Application'
import { createHttpApp } from '../../factory/createHttpServer'
import request from 'supertest'

const appGateway = createHttpApp()
const app = new Application({
  appGateway
})

let server: any;

beforeAll(async () => {
  await app.init()
  server = (app.getAppGateway() as any).getServer()
})

test('GET /api/orders (Get all orders)', (done) => {
  request.agent(server)
    .get('/api/orders')
    .expect(200)
    .end(function (err, res) {
      expect(err).toBeNull();
      expect(res.body).toBeDefined();
      expect(res.body.length).not.toBe(0);
      done()
    });
})
test('GET /api/orders/:id (Get order by id)', (done) => {
  let orderId = 1;
  request.agent(server)
    .get(`/api/orders/${orderId}`)
    .expect(200)
    .end(function (err, res) {
      expect(err).toBeNull();
      expect(res.body).toBeTruthy();
      expect(res.body.created_at).toBeTruthy();
      expect(res.body.product_id).toBeTruthy();
      expect(res.body.user_id).toBeTruthy();
      done()
    });
})

test('GET /api/orders/:id (should return 404 if order not found)', (done) => {
  let randomId = Math.floor(Math.random() * 400000);
  request.agent(server)
    .get(`/api/orders/${randomId}`)
    .expect(404)
    .end(function (err, res) {
      expect(err).toBeNull();
      done()
    });
})