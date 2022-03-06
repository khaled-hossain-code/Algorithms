const {twoNumberSum1, twoNumberSum2, twoNumberSum3} = require('./two_number_sum');
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const solutions = [twoNumberSum1, twoNumberSum2, twoNumberSum3];

for (let solutionNumber = 0; solutionNumber < solutions.length; solutionNumber++) {
    const solution = solutions[solutionNumber];

    describe(`two number sum solution${solutionNumber + 1}`, () => {
        test(' returns 2 numbers', () => {
            let targetSum = 10
            expect(solution(array, targetSum).length).toEqual(2);
            expect(solution(array, targetSum)).toEqual(expect.arrayContaining([11, -1]));
        });
        
        test('returns empty array', () => {
            let targetSum = 20
            expect(solution(array, targetSum)).toEqual([]);
        });
    });
}
