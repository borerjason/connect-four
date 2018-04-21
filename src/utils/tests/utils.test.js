import { matchesRight } from '../index';

import { buildIntialBoard } from '../dummyData';

describe('should return total number of matches to the right', () => {
  it('should return three when three matches on bottom row', () => {
    const board = buildIntialBoard();
    board[36] = 'Blue';
    board[37] = 'Blue';
    expect(matchesRight(5, 0, 35, board, 'Blue')).toBe(2);
  });
});
