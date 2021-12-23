
export function objectInclude (obj1: any, obj2: any): boolean {
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
  }
  return true
}

export function filterList (arr: any[], filter: any): any[] {
  return arr.filter((obj) => {
    return objectInclude(obj, filter)
  })
}

export function First (arr: any[], filter: any): any {
  const one = arr.find((obj) => {
    return objectInclude(obj, filter)
  })
  if (one === undefined) {
    return null
  }

  return one
}
