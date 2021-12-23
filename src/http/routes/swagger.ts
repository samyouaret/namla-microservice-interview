import express from 'express'
import type Application from '../../Application'
import { apiDoc } from './docs/api-doc';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export default function swaggerRoute(app: Application): express.Handler {
    const options = {
        swaggerDefinition: apiDoc,
        apis: [`${__dirname}/*.ts`],
    };
    const swaggerSpec = swaggerJSDoc(options);
    const router = express.Router()
    router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    return router;
}