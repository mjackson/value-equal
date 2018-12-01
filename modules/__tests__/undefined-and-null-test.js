import valueEqual from 'value-equal';

describe('undefined and null', () => {
  describe('when both are undefined', () => {
    it('returns true', () => {
      expect(valueEqual(undefined, undefined)).toBe(true);
    });
  });

  describe('when one is null', () => {
    it('returns false', () => {
      expect(valueEqual(undefined, null)).toBe(false);
    });
  });

  describe('when one is null and the other is an object', () => {
    it('returns false', () => {
      expect(valueEqual({}, null)).toBe(false);
      expect(valueEqual(null, {})).toBe(false);
    });
  });
});
