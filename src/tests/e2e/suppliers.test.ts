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

test('GET /api/suppliers', (done) => {
  request.agent(server)
    .get('/api/suppliers')
    .expect(200)
    .end(function (err, res) {
      expect(err).toBeNull();
      expect(res.body).toBeDefined();
      expect(res.body.length).not.toBe(0);
      done()
    });
})
test('GET /api/suppliers/:id (Get supplier by id)', (done) => {
  let supplierId = 1;
  request.agent(server)
    .get(`/api/suppliers/${supplierId}`)
    .expect(200)
    .end(function (err, res) {
      expect(err).toBeNull();
      expect(res.body).toBeDefined();
      expect(res.body.email).toBeTruthy();
      done()
    });
})