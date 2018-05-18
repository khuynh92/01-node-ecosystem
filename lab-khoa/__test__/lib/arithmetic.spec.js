'use strict';

const arithmetic = require('../../lib/arithmetic');

describe('arithmetic module', () => {
  it('add() should return null when passed a non-number', () => {
    expect(arithmetic.add('hello', 'world')).toBeNull();
    expect(arithmetic.add('hello', 1)).toBeNull();
    expect(arithmetic.add(1, 'world')).toBeNull();
  });

  it('add() should return 18 when passed 10 and 8 as arguments', () => {
    expect(arithmetic.add(10, 8)).toEqual(18);
  });

  it('sub() should return null when passed a non-number', () => {
    expect(arithmetic.sub('hello', 'world')).toBeNull();
    expect(arithmetic.sub('hello', 1)).toBeNull();
    expect(arithmetic.sub(1, 'world')).toBeNull();
  });

  it('sub() should return 4 when passed 10 and 6 as arguments', () => {
    expect(arithmetic.sub(10, 6)).toEqual(4);
  });
});