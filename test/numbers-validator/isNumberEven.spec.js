const { expect } = require('chai');

const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });
  describe('positive tests', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false if number is odd', () => {
      expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should throw new Error if number is not of type "Number"', () => {
      const number = 'two';
      expect(() => validator.isNumberEven(number)).to.throw(`[${number}] is not of type "Number" it is of type "${typeof number}"`);
    });
  });
});
