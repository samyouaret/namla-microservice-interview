import OrderRepository from '../repositories/OrderRepository'

export default class OrderService {
  private readonly repository: OrderRepository

  constructor (Repository: OrderRepository) {
    this.repository = Repository
  }

  async getAll (): Promise<any[]> {
    return await this.repository.findMany()
  }

  async getById (id: number | string): Promise<any> {
    return await this.repository.findOne({ id: id })
  }
}
