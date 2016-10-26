const serialEqual = (a, b) => {
  if (a === b)
    return true

  if (a == null || b == null)
    return a == b

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length)
      return false

    return a.every((item, index) => serialEqual(item, b[index]))
  }

  const aType = typeof a
  const bType = typeof b

  if (aType !== bType)
    return false

  if (aType === 'object') {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)

    if (aKeys.length !== bKeys.length)
      return false

    return aKeys.every(key => serialEqual(a[key], b[key]))
  }

  return false
}

export default serialEqual
