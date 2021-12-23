import error404 from './404'
import error500 from './500'
import ordersRoutes from './orders'
import rootRoutes from './root'
import suppliersRoutes from './suppliers'

// loaders will be called in the defined order
const routes = [
  rootRoutes,
  suppliersRoutes,
  ordersRoutes,
  error404,
  error500,
]

export default routes
