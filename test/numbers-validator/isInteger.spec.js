const { expect } = require('chai');

const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return true if number is zero', () => {
      expect(validator.isInteger(0)).to.be.equal(true);
    });

    it('should return true if number is integer', () => {
      expect(validator.isInteger(4)).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false if number is not integer', () => {
      expect(validator.isInteger(4.5)).to.be.equal(false);
    });

    it('should throw new Error if it is not a number', () => {
      expect(() => validator.isInteger('4')).to.throw(Error);
    });

    it('should throw specific error message if it is not a number', () => {
      const val = '4';
      expect(() => validator.isInteger(val)).to.throw(`[${val}] is not a number`);
    });
  });
});
