import StoreInteface from '../contracts/StoreInteface'

export default class SuppllierRepository {
  private readonly store: StoreInteface

  constructor (store: StoreInteface) {
    this.store = store
  }

  async findOne (filter: any): Promise<any> {
    return await this.store.findOne(filter)
  }

  async findMany (filter?: any): Promise<any[]> {
    return await this.store.findMany(filter)
  }
}
