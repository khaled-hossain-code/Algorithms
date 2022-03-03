function twoNumberSum(array, targetSum) {
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

module.exports = twoNumberSum