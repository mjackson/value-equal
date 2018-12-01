import valueEqual from 'value-equal';

describe('boolean primitives', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual(true, true)).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual(true, false)).toBe(false);
    });
  });
});

describe('boolean objects', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual(new Boolean(true), new Boolean(true))).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual(new Boolean(true), new Boolean(false))).toBe(false);
    });
  });
});
