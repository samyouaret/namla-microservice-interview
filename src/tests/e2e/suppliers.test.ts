import Application from '../../Application'
import { createHttpApp } from '../../factory/createHttpServer'
// import createInMemoryStore from '../../factory/createInMemoryStore'
// import SuppllierRepository from '../../repositories/SupplierRepository'
// import SupplierService from '../../services/SupplierService'
import request from 'supertest'

// const memoryStore = createInMemoryStore('suppliers')
const appGateway = createHttpApp()
const app = new Application({
  appGateway
})
let server: any;

beforeAll(async () => {
  await app.init()
  server = (app.getAppGateway() as any).getServer()
  // await memoryStore.init()
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