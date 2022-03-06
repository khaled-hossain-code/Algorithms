const {fibonacci1, fibonacci2} = require('./fib');

const solutions = [fibonacci1, fibonacci2];

for (let solutionNumber = 0; solutionNumber < solutions.length; solutionNumber++) {
    const solution = solutions[solutionNumber];

    describe(`fib solution${solutionNumber + 1}`, () => {        
        test('returns empty array', () => {
            expect(solution()).toEqual([]);
        });
    });
}