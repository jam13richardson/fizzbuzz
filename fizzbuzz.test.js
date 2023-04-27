const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('returns FizzBuzz if the number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns Buzz if the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns Fizz if the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

