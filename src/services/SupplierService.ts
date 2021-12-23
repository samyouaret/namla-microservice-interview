import type SuppllierRepository from '../repositories/SupplierRepository'

export default class SupplierService {
  private readonly repository: SuppllierRepository

  constructor (Repository: SuppllierRepository) {
    this.repository = Repository
  }

  async getAll (): Promise<any[]> {
    return await this.repository.findMany()
  }

  async getById (id: number | string): Promise<any> {
    return await this.repository.findOne({ id: id })
  }
}
