const { gcd1, gcd2 } = require("./gcd");

describe(`gcd solution1`, () => {
  test("returns empty array", () => {
    expect(gcd1()).toEqual([]);
  });
});

describe(`gcd solution2`, () => {
  test("returns gcd of 2 numbers", () => {
    const num1 = 357;
    const num2 = 234;
    const gcdResult = 3;
    expect(gcd2(num1, num2)).toEqual(gcdResult);
  });
});
