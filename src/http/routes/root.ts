import express from 'express'
import type Application from '../../Application'

export default function rootRoutes(app: Application): express.Handler {
    const router = express.Router()

    router.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
        res.json({
            api: "v1",
            description: "Suppliers and Order service"
        })
    });

    router.get('/api', async (req: express.Request, res: express.Response): Promise<void> => {
        res.json({
            api: "v1",
            description: "Suppliers and Order service"
        })
    });

    return router;
}