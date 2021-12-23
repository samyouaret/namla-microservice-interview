import error404 from './404'
import error500 from './500'
import ordersRoutes from './orders'
import suppliersRoutes from './suppliers'

// loaders will be called in the defined order
const routes = [
  suppliersRoutes,
  ordersRoutes,
  error404,
  error500,
]

export default routes
