import Application from '../../Application'
import express, { Router } from 'express'
import SupplierService from '../../services/SupplierService'
import SuppllierRepository from '../../repositories/SupplierRepository'
import createJsonStore from '../../factory/createJsonStore'

export default async function suppliersRoutes (app: Application): Promise<Router> {
  const store = createJsonStore('suppliers')
  await store.init()
  const repository = new SuppllierRepository(store)
  const supplierService = new SupplierService(repository)
  const router = express.Router()

  router.get('/api/suppliers', async (req: express.Request, res: express.Response): Promise<void> => {
    const suppliers = await supplierService.getAll()
    res.json(suppliers)
  })

  router.get('/api/suppliers/:id', async (req: express.Request, res: express.Response): Promise<void> => {
    const supplier = await supplierService.getById(+req.params.id)
    res.json(supplier)
  })

  return router
}
