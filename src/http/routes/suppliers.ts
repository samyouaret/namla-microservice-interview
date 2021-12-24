import Application from '../../Application'
import express, { Router } from 'express'
import SupplierService from '../../services/SupplierService'
import SuppllierRepository from '../../repositories/SupplierRepository'
import createJsonStore from '../../factory/createJsonStore'
import SupplierController from '../controllers/SupplierController'

export default async function suppliersRoutes(app: Application): Promise<Router> {
  const store = createJsonStore('suppliers')
  await store.init()
  const repository = new SuppllierRepository(store)
  const supplierService = new SupplierService(repository)
  const controller = new SupplierController(supplierService)
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
  router.get('/api/suppliers', controller.all.bind(controller));

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
  router.get('/api/suppliers/:id', controller.one.bind(controller))

  return router
}
