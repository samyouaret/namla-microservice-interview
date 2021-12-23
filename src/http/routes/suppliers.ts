import Application from '../../Application'
import express, { Router } from 'express'
import SupplierService from '../../services/SupplierService'
import SuppllierRepository from '../../repositories/SupplierRepository'
import createJsonStore from '../../factory/createJsonStore'

export default async function suppliersRoutes(app: Application): Promise<Router> {
  const store = createJsonStore('suppliers')
  await store.init()
  const repository = new SuppllierRepository(store)
  const supplierService = new SupplierService(repository)
  const router = express.Router()

  /**
   * @openapi
   * /suppliers:
   *   get:
   *     summary: Retrieve a list of suppliers.
   *     description: Retrieve list to show all suppliers.
   *     responses:
   *       200:
   *         description: A list of suppliers.
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
   *                         description: The supplier ID.
   *                         example: 1
   *                       first_name:
   *                         type: string
   *                         description: supplier first name.
   *                         example: "Brenden"
   *                       last_name:
   *                         type: string
   *                         description: supplier first name.
   *                         example: "Karpinski"
   *                       email:
   *                         type: string
   *                         description: supplier email.
   *                         example: "bkarpinski0@europa.eu"
   *                       city:
   *                         type: string
   *                         description: supplier city.
   *                         example: "Borne Sulinowo"
   *                       address:
   *                         type: string
   *                         description: supplier street address.
   *                         example: "84 Tony Junction"
   *                       phone:
   *                         type: string
   *                         description: supplier phone number.
   *                         example: "+48 885 887 7459"
   */
  router.get('/api/suppliers', async (req: express.Request, res: express.Response): Promise<void> => {
    const suppliers = await supplierService.getAll()
    res.json({ data: suppliers })
  })

  /**
   * @openapi
   * /suppliers/{id}:
   *   get:
   *     summary: Retrieve a supplier by id.
   *     description: Retrieve a specific supplier by its id.
   *     responses:
   *       200:
   *         description: A Supplier object.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: integer
   *                   description: The supplier ID.
   *                   example: 1
   *                 first_name:
   *                   type: string
   *                   description: supplier first name.
   *                   example: "Brenden"
   *                 last_name:
   *                   type: string
   *                   description: supplier first name.
   *                   example: "Karpinski"
   *                 email:
   *                   type: string
   *                   description: supplier email.
   *                   example: "bkarpinski0@europa.eu"
   *                 city:
   *                   type: string
   *                   description: supplier city.
   *                   example: "Borne Sulinowo"
   *                 address:
   *                   type: string
   *                   description: supplier street address.
   *                   example: "84 Tony Junction"
   *                 phone:
   *                   type: string
   *                   description: supplier phone number.
   *                   example: "+48 885 887 7459"
   *       404:
   *         description: Target supplier not found.
   */
  router.get('/api/suppliers/:id', async (req: express.Request, res: express.Response): Promise<void> => {
    const supplier = await supplierService.getById(+req.params.id)
    if (supplier === null) {
      res.sendStatus(404)
      return
    }
    res.json(supplier)
  })

  return router
}
