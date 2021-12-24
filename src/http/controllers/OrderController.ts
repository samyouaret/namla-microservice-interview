import OrderService from "../../services/OrderService";

import type { Request, Response } from "express";

class OrderController {

    constructor(private readonly orderService: OrderService) { }

    async all(req: Request, res: Response): Promise<void> {
        const orders = await this.orderService.getAll()
        res.json({ data: orders })
    }

    async one(req: Request, res: Response): Promise<void> {
        const order = await this.orderService.getById(+req.params.id)
        if (order === null) {
            res.sendStatus(404)
            return
        }
        res.json(order)
    }
}

export default OrderController;