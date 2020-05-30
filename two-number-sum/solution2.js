let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10

function twoNumberSum(array, targetSum) {
  let hashTable = {}

  for (const num1 of array) {
    const reminder = targetSum - num1
    const lookupValue = hashTable[reminder]

    if (lookupValue) {
      return [num1, reminder]
    } else {
      hashTable[num1] = true
    }
  }
}

const result = twoNumberSum(array, targetSum)

console.log(result)
