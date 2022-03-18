# Problem (GCD)

Find the greatest common divisor. for example 10/4. its gcd is 2

# solutions

## solution1

---

let's do it in naive way.

```javascript
function gcd(num1, num2) {
  let greatest = 0;

  for (var i = 1; i < a + b; i++) {
    if (a % i === 0 && b % i === 0) {
      greatest = i;
    }
  }

  return greatest;
}
```

**Space Complexity**: 1

**Time Complexity**: 2n

but in reality if we give two numbers like 32873833 & 19837266. then it will take thousands of days to compute which is not practical solution

## solution2

---

Implement the Euclidean Algorithm.

Let **num1'** be the remainder when **num1** is divided by **num2** then

gcd(num1, num2) = gcd(num1', num2) = gcd(num1, num2')

for example GCD(357,234)

step1: 357 % 234 = 123

step2: 234 % 123 = 111

step3: 123 % 111 = 12

step3: 111 % 12 = 3

step4: 12 % 3 = 0

as the reminder is zero. so the answer is 3.

**Space Complexity**: 1

**Time Complexity**: log(num1\*num2)
