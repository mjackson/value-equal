import valueEqual from 'value-equal';

describe('date objects', () => {
  const now = Date.now();

  describe('that are equal', () => {
    it('returns true', () => {
      expect(valueEqual(new Date(now), new Date(now))).toBe(true);
    });
  });

  describe('that are not equal', () => {
    it('returns false', () => {
      expect(valueEqual(new Date(now), new Date(now + 1))).toBe(false);
    });
  });
});
