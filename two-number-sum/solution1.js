let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10

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

const result = twoNumberSum(array, targetSum)

console.log(result)

module.exports = twoNumberSum