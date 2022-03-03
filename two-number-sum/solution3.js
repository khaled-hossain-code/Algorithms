function twoNumberSum(array, targetSum) {
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

module.exports = twoNumberSum
