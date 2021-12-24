import error404 from './404'
import error500 from './500'
import logger from './logger'
import ordersRoutes from './orders'
import rootRoutes from './root'
import suppliersRoutes from './suppliers'
import swaggerRoute from './swagger'

// loaders will be called in the defined order
const routes = [
  rootRoutes,
  logger,
  suppliersRoutes,
  ordersRoutes,
  swaggerRoute,
  error404,
  error500,
]

export default routes
