function fibonacciNumbers1(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacciNumbers1(n-1)+fibonacciNumbers1(n-2)
}

function fibonacciNumbers2(n) {
  const fib = [0, 1];

  for(let i=2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }

  return fib[n]
}

module.exports = {
  fibonacciNumbers1,
  fibonacciNumbers2,
};