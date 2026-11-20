const { expect } = require('chai');

const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return empty array', () => {
      expect(validator.getEvenNumbersFromArray([])).to.deep.equal([]);
    });

    it('should return array of even numbers', () => {
      expect(validator.getEvenNumbersFromArray([0, 2, 3, 4, 5])).to.deep.equal([0, 2, 4]);
    });
  });

  describe('negative tests', () => {
    it('should throw new Error if array is not an array', () => {
      expect(() => validator.getEvenNumbersFromArray('1, 3, 6')).to.throw(Error);
    });

    it('should throw specific error message if array is not an array', () => {
      const val = '1, 3, 6';
      expect(() => validator.getEvenNumbersFromArray(val)).to.throw(`[${val}] is not an array of "Numbers"`);
    });

    it('should throw new Error if array contains non-number items', () => {
      expect(() => validator.getEvenNumbersFromArray([1, '3', 6])).to.throw(Error);
    });

    it('should throw specific error message if array contains non-number items', () => {
      const val = [1, '3', 6];
      expect(() => validator.getEvenNumbersFromArray(val)).to.throw(`[${val}] is not an array of "Numbers"`);
    });
  });
});
