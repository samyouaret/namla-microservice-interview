import initiable from '../contracts/Initiable'
import StoreInteface from '../contracts/StoreInteface'
import * as fs from 'fs/promises'
import * as path from 'path'
import { filterList, First } from '../helpers/filters'

export default class JsonStore implements StoreInteface, initiable {
  private readonly storeName: string
  private data: any[]

  constructor (storeName: string) {
    this.storeName = storeName
  }

  async init (): Promise<any> {
    try {
      const file = path.join(path.dirname(__dirname), 'assets', `${this.storeName}.json`)
      await fs.access(file)
      const fileContent = await fs.readFile(file)
      this.data = JSON.parse(fileContent.toString())
    } catch (error) {
      console.log(error)
      throw new Error(`Cannot find ${this.storeName} database`)
    }
  }

  async findOne (filter: any): Promise<any> {
    return First(this.data, filter)
  }

  async findMany (filter?: any): Promise<any[]> {
    if (filter === undefined) {
      return this.data
    }
    return filterList(this.data, filter)
  }
}
