import express from 'express'
import type Application from '../../Application'
import { apiDoc } from './docs/api-doc';
import swaggerUi from 'swagger-ui-express';

export default function swaggerRoute(app: Application): express.Handler {
    const router = express.Router()
    router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(apiDoc));
    return router;
}