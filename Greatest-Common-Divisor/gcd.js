function gcd1() {
  return [];
}

function gcd2(num1, num2) {
  if (num2 === 0) return num1;

  let reminder = num1 % num2;
  return gcd2(num2, reminder);
}

module.exports = {
  gcd1,
  gcd2,
};
