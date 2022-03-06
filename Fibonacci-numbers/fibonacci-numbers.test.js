const {fibonacciNumbers1, fibonacciNumbers2} = require('./fibonacci-numbers');

describe(`fibonacciNumbers solution1`, () => {        
  test('returns n when n is less than or equal to 1', () => {
      expect(fibonacciNumbers1(0)).toEqual(0);
      expect(fibonacciNumbers1(1)).toEqual(1);
  });

  test('returns 1 when n is 2', () => {
    expect(fibonacciNumbers1(2)).toEqual(1);
  })

  test('returns 13 when n is 7', () => {
    expect(fibonacciNumbers1(7)).toEqual(13);
  })
});

describe(`fibonacciNumbers solution2`, () => {        
  test('returns n when n is less than or equal to 1', () => {
      expect(fibonacciNumbers2(0)).toEqual(0);
      expect(fibonacciNumbers2(1)).toEqual(1);
  });

  test('returns 1 when n is 2', () => {
    expect(fibonacciNumbers2(2)).toEqual(1);
  })

  test('returns 13 when n is 7', () => {
    expect(fibonacciNumbers2(7)).toEqual(13);
  })

  test('returns large number when n is 100', () => {
    expect(fibonacciNumbers2(100)).toEqual(354224848179262000000);
  })
});