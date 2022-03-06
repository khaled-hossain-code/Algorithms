function twoNumberSum1(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i]

    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j]

      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }

  return []
}

function twoNumberSum2(array, targetSum) {
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

function twoNumberSum3(array, targetSum) {
  const sortedArray = array.sort((a, b) => a - b)
  let rightPointer = sortedArray.length - 1
  let leftPointer = 0

  for (let i = 0; i < sortedArray.length; i++) {
    let leftNum = sortedArray[leftPointer]
    let rightNum = sortedArray[rightPointer]
    

    if (leftNum + rightNum === targetSum) {
      return [leftNum, rightNum]
    } else if (leftPointer + rightPointer < targetSum) {
      leftPointer++
    } else {
      rightPointer++
    }
  }

  return []
}


module.exports = {
  twoNumberSum1,
  twoNumberSum2,
  twoNumberSum3,
};