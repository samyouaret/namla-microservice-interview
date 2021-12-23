import express from 'express'
import type Application from '../../Application'

export default function error404(app: Application): express.Handler {
    return (req: express.Request, res: express.Response) => {
        res.sendStatus(404);
    }
}