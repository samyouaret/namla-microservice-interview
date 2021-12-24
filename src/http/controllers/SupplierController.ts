import type { Request, Response } from "express";
import SupplierService from "../../services/SupplierService";

class SupplierController {

    constructor(private readonly supplierService: SupplierService) { }

    async all(req: Request, res: Response): Promise<void> {
        const suppliers = await this.supplierService.getAll()
        res.json({ data: suppliers })
    }

    async one(req: Request, res: Response): Promise<void> {
        const supplier = await this.supplierService.getById(+req.params.id)
        if (supplier === null) {
            res.sendStatus(404)
            return
        }
        res.json(supplier)
    }
}

export default SupplierController;