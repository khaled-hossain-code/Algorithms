# Problem

fib(0) = 0

fib(1) = 1

fib(n) = f(n-1) + f(n-2) where n>1

here is the series

0, 1, 1, 2, 3, 5, 8, 13, 21, 34

here is number is the sum of its previous two number.

# Solutions

## solution1

---

if number is less than or equal to 1 then return the number else return last two fibonacci number added recursively.

**Space Complexity**: 1

**Time Complexity**:
for n <= 1 it takes constant time
else T(n-1)+T(n-2)+3 lines to execute
T(100) == 1.77.10^21 (1.77 sextillion)

## solution2

---

> imitate hand computation

what do we do when we calculate fibonacci number by hand?

0, 1, 1, 2, 3, 5, 8, 13

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

we always sum only last two digit and get the next fibonacci number.

**Space Complexity**: n

each time we increase n our array increases linearly

**Time Complexity**: n
T(n) = 2n+2 lines to execute
T(100) == 202
