import valueEqual from 'value-equal';

describe('empty objects', () => {
  it('returns true', () => {
    expect(valueEqual({}, Object.create(null))).toBe(true);
  });
});

describe('objects with undefined values', () => {
  it('returns false', () => {
    expect(valueEqual({ a: undefined }, { b: 1 })).toBe(false); // #5
  });
});

describe('objects with different constructors but the same properties', () => {
  function A(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  function B(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  it('returns true', () => {
    expect(valueEqual(new A(1, 2, 3), new B(1, 2, 3))).toBe(true);
  });
});
