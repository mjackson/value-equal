function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them is null we already know they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  var aType = typeof a;
  var bType = typeof b;

  if (aType === 'object' || bType === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var combo = Object.assign({}, a, b);

    return Object.keys(combo).every(function(key) {
      return valueEqual(combo[key], a[key]) && valueEqual(combo[key], b[key]);
    });
  }

  if (aType !== bType) return false;

  return false;
}

export default valueEqual;
