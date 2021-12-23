import StoreInteface from '../contracts/StoreInteface'

export default class SuppllierRepository {
  private readonly store: StoreInteface

  constructor (store: StoreInteface) {
    this.store = store
  }

  async findOne (filter: any): Promise<any> {
    return await this.store.findOne(filter)
  }

  async findById (id: number): Promise<any> {
    return await this.store.findOne({ id })
  }

  async findMany (filter?: any): Promise<any[]> {
    return await this.store.findOne(filter)
  }
}
