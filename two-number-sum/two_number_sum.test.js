const solution1 = require('./solution1');
const array = [3, 5, -4, 8, 11, 1, -1, 6];

describe('solution1', () => {
    test(' returns 2 numbers', () => {
        let targetSum = 10
        expect(solution1(array, targetSum)).toEqual([11, -1]);
    });
    
    test('returns empty array', () => {
        let targetSum = 20
        expect(solution1(array, targetSum)).toEqual([]);
    });
});
