const omit = <T extends object>(obj: T, keys: Array<any>): Omit<T, keyof typeof keys> => {
  keys.forEach(key => delete obj[key])
  return obj
}

export default omit
