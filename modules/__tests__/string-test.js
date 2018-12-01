import valueEqual from 'value-equal';

describe('string primitives', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual('asdf', 'asdf')).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual('asdf', 'sdfg')).toBe(false);
    });
  });
});

describe('string objects', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual(new String('asdf'), new String('asdf'))).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual(new String('asdf'), new String('sdfg'))).toBe(false);
    });
  });
});
