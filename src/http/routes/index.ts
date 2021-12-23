import ordersRoutes from './orders'
import suppliersRoutes from './suppliers'

// loaders will be called in the defined order
const routes = [
  suppliersRoutes,
  ordersRoutes
]

export default routes
