import initiable from '../contracts/Initiable'
import StoreInteface from '../contracts/StoreInteface'
import { filterList, First } from '../helpers/filters'

const memoryStore = {
  suppliers: [
    { id: 1, first_name: 'Brenden', last_name: 'Karpinski', email: 'bkarpinski0@europa.eu', city: 'Borne Sulinowo', address: '84 Tony Junction', phone: '+48 885 887 7459' },
    { id: 2, first_name: 'Max', last_name: 'Van Dale', email: 'mvandale1@whitehouse.gov', city: 'Boca Suno', address: '9 Forest Way', phone: '+593 313 117 8359' },
    { id: 3, first_name: 'Greta', last_name: 'Summerrell', email: 'gsummerrell2@ihg.com', city: 'Wangjiaping', address: '20188 Little Fleur Place', phone: '+86 858 464 0758' },
    { id: 4, first_name: 'May', last_name: 'Salle', email: 'msalle3@abc.net.au', city: 'Fécamp', address: '687 Manley Hill', phone: '+33 544 466 5566' },
    { id: 5, first_name: 'Erich', last_name: 'Woolatt', email: 'ewoolatt4@eventbrite.com', city: 'Khao Khitchakut', address: '87 Hazelcrest Trail', phone: '+66 891 286 7924' },
    { id: 6, first_name: 'Constanta', last_name: 'Parysiak', email: 'cparysiak5@51.la', city: 'Beigao', address: '8938 Swallow Point', phone: '+86 944 840 0832' },
    { id: 7, first_name: 'Kylen', last_name: 'Bateup', email: 'kbateup6@tinypic.com', city: 'Bridel', address: '0 Hagan Alley', phone: '+352 650 252 8647' },
    { id: 8, first_name: 'Tommy', last_name: 'Albro', email: 'talbro7@virginia.edu', city: 'Căuşeni', address: '479 Charing Cross Hill', phone: '+373 193 608 5170' },
    { id: 9, first_name: 'Ozzie', last_name: 'Drayton', email: 'odrayton8@paypal.com', city: 'Lyon', address: '70 Victoria Trail', phone: '+33 770 752 8790' },
    { id: 10, first_name: 'Milli', last_name: 'Iannello', email: 'miannello9@abc.net.au', city: 'Nyangao', address: '96760 Debs Road', phone: '+255 654 540 1413' }
  ]
}

export default class InMemoryStore implements StoreInteface, initiable {
  private readonly storeName: string
  private data: any[]

  constructor (storeName: string) {
    this.storeName = storeName
  }

  async init (): Promise<any> {
    if (!Object.keys(memoryStore).includes(this.storeName)) {
      throw new Error(`Cannot find ${this.storeName} database`)
    }
    this.data = (memoryStore as any)[this.storeName]
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
