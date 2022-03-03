function twoNumberSum(array, targetSum) {
  let hashTable = {}

  console.log('inside solution2')
  for (const num1 of array) {
    const reminder = targetSum - num1
    const lookupValue = hashTable[reminder]
    if (lookupValue) {
      console.log([num1, reminder])
      return [num1, reminder]
    } else {
      console.log(hashTable)
      hashTable[num1] = true
    }
  }

  return [];
}

module.exports = twoNumberSum
