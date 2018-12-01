import valueEqual from 'value-equal';

describe('arrays', () => {
  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual([1, 2, 3], [2, 3, 4])).toBe(false);
    });
  });
});
