import InMemoryStore from '../database/InMemoryStore'

export default function createInMemoryStore(name: string): InMemoryStore {
  return new InMemoryStore(name)
}
