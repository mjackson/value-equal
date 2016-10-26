const valueEqual = (a, b) => {
  if (a === b)
    return true

  if (a == null || b == null)
    return false

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length)
      return false

    return a.every((item, index) => valueEqual(item, b[index]))
  }

  const aType = typeof a
  const bType = typeof b

  if (aType !== bType)
    return false

  if (aType === 'object') {
    const aValue = a.valueOf()
    const bValue = b.valueOf()

    if (aValue !== a || bValue !== b)
      return valueEqual(aValue, bValue)

    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)

    if (aKeys.length !== bKeys.length)
      return false

    return aKeys.every(key => valueEqual(a[key], b[key]))
  }

  return false
}

export default valueEqual
