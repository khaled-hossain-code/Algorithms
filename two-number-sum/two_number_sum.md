# Problem

## Two Number Sum

[3, 5, -4, 8, 11, 1, -1, 6] array of distinct number value

target sum 10

find the pair of number which is equal to target sum. If there is none then return empty array

ans: [11, -1]

# solutions

## solution 1

---

two for loop and check if the addition is equal to target number

**Space Complexity**: 1

**Time Complexity**: O(n^2). as we are traversing our array within another array

## solution 2

---

use a hash table of numbers.

target Sum = 10

current Num = x

y = 10 - x. if y is in the hash table then return [x , y] else keep inserting in the hash table.

**example**:

target sum = 10

array [3, 5, -4, 8, 11, 1, -1, 6]

hash table { }

step1: y = 10 - 3 = 7. is 7 in our hash table? Nop. Then add 3 to the has table { 3 }

step2: y = 10 - 5 = 5, is 5 in our hash table? Nop. Then add 5 to the has table { 3, 5 }

step3: y = 10 - (-4) = 14, is 14 in our hash table? Nop. Then add -4 to the has table { 3, 5, -4 }

step4: y = 10 - 8 = 2, is 2 in our hash table? Nop. Then add 8 to the has table { 3, 5, -4, 8 }

step5: y = 10 - 11 = -1, is -1 in our hash table? Nop. Then add 11 to the has table { 3, 5, -4, 8, 11 }

step6: y = 10 - 1 = 9, is 9 in our hash table? Nop. Then add 1 to the has table { 3, 5, -4, 8, 11, 1 }

step7: y = 10 - (-1) = 11, is 11 in our hash table? YES!. Then return [11, -1]. that's the answer

**Time Complexity**: O(N). because we are traversing our array only once

**Space Complexity**: O(N). because the large our array is our hash table will be at worst that large.

## solution 3

---

sort the array and apply two pointer method.

target-sum = 10

array [3, 5, -4, 8, 11, 1, -1, 6]

sorted array [ -4, -1, 1, 3, 5, 6, 8, 11]

left pointer, L = -4

right pointer, R = 11

sum L & R and compare.

if L + R == target-sum; then these two is our number,

else if L + R > target-sum; then we should move our pointer so that sum decrease. so moving the right pointer to its left will give us a smaller number.

else our sum is less than target-sum; so we have to move our left pointer to its right so that we get a higher number.

example:

target sum 10

sorted array [ -4, -1, 1, 3, 5, 6, 8, 11]

left pointer, L = -4,

right pointer, R = 11

step1: L + R = -4 + 11 = 7 which is less than 10 so increase left pointer. now L = -1

step2: L + R = -1 + 11 = 10. so answer is [-1, 11]

**Time Complexity**: O(n log(n)). because quick sort will take at least O(n log(n)).

**Space Complexity**: 1.
