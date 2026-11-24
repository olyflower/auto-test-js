const { expect } = require('chai');

const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return true if all elements in an array are numbers', () => {
      expect(validator.isAllNumbers([0, 3, 7, -2])).to.be.equal(true);
    });

    it('should return true if array is empty', () => {
      expect(validator.isAllNumbers([])).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false if array contains non-number elements', () => {
      expect(validator.isAllNumbers([0, 3, '7', -2])).to.be.equal(false);
    });

    it('should throw new Error if array is not an array', () => {
      expect(() => validator.isAllNumbers('1, 3, 6')).to.throw(Error);
    });

    it('should throw specific error message if array is not an array', () => {
      const val = '1, 3, 6';
      expect(() => validator.isAllNumbers(val)).to.throw(`[${val}] is not an array`);
    });
  });
});
