import valueEqual from 'value-equal';

describe('number primitives', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual(123.456, 123.456)).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual(123.456, 123.567)).toBe(false);
    });
  });
});

describe('number objects', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual(new Number(123.456), new Number(123.456))).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual(new Number(123.456), new Number(123.567))).toBe(false);
    });
  });
});
