const solution1 = require('./solution1');
const solution2 = require('./solution2');
const solution3 = require('./solution3');
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const solutions = [solution1, solution2, solution3];

for (let solutionNumber = 0; solutionNumber < solutions.length; solutionNumber++) {
    const solution = solutions[solutionNumber];

    describe(`solution${solutionNumber + 1}`, () => {
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
