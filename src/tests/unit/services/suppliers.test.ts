import InMemoryStore from '../../../database/InMemoryStore'
import SuppllierRepository from '../../../repositories/SupplierRepository'
import SupplierService from '../../../services/SupplierService'

const memoryStore = new InMemoryStore('suppliers')
const supplierRepository = new SuppllierRepository(memoryStore)
const supplierService = new SupplierService(supplierRepository)

beforeAll(async () => {
  await memoryStore.init()
})

test('Can get all suppliers', async () => {
  const suppliers = await supplierService.getAll()
  expect(suppliers).toBeDefined()
  expect(suppliers.length).not.toBe(0)
})

test('Can get correct supplier by id', async () => {
  const supplier = await supplierService.getById(1)
  expect(supplier).not.toBeNull()
  expect(supplier.id).toBe(1)
})
