import JsonStore from '../database/JsonStore'

export default function createJsonStore (name: string): JsonStore {
  return new JsonStore(name)
}
