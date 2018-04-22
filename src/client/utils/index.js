/**
 * Summary: Builds empty board array.
 */
export const buildIntialBoard = () => {
  const board = new Array(7 * 6);
  board.fill('');
  return board;
};

/**
 * Summary: Determines if a move is valid.
 * @param {number} id Index of attempted move.
 * @param {array}  board Board to check.
 * @param {bool}  isWinner True if the current board contains a winner, false if not.
 * @return {bool}  True if valid, false if not valid.
 */
export const validateMove = (id, board, isWinner) => {
  const move = board[id];
  const below = board[id + 7];

  return move === '' && below !== '' && !isWinner;
};

/**
 * Summary: Get row number from board array index number.
 * @param {number} id Index in board.
 * @return {number} Row in board.
 */
const getRow = id => Math.floor(id / 7);

/**
 * Summary: Matching Functions.
 * Description: Calculates how many pieces adjacent to current move belong to same player.
 * @param {number}  col Column in board.
 * @param {number}  row Row in board.
 * @param {array}   board Board to check.
 * @param {string}  color Player to chcek.
 * @param {number}  inc Increment id to find next piece.
 * @param {number}  dec Decrement id to find next piece
 * @return {number} Total adjacent matches.
 */

const matchesBelow = (col, id, board, color) => {
  let total = 0;
  let belowId = id + 7;

  while (board[belowId] === color) {
    total += 1;
    belowId += 7;
  }

  return total;
};

export const matchesRight = (row, id, board, color) => {
  let total = 0;
  let rightId = id + 1;
  let rightRow = getRow(rightId);
  while (board[rightId] === color && rightRow === row) {
    total += 1;
    rightId += 1;
    rightRow = getRow(rightId);
  }

  return total;
};

const matchesLeft = (row, id, board, color) => {
  let total = 0;
  let leftId = id - 1;
  let leftRow = getRow(leftId);

  while (board[leftId] === color && leftRow === row) {
    total += 1;
    leftId -= 1;
    leftRow = getRow(leftId);
  }

  return total;
};

const matchesDiagonalDown = (row, id, board, color, inc) => {
  let total = 0;
  let diagId = id + inc;
  let diagRow = getRow(diagId);

  while (board[diagId] === color && diagRow > row) {
    total += 1;
    diagId += inc;
    diagRow = getRow(diagId);
  }

  return total;
};


const matchesDiagonalUp = (row, id, board, color, dec) => {
  let total = 0;
  let diagId = id - dec;
  let diagRow = getRow(diagId);

  while (board[diagId] === color && diagRow < row) {
    total += 1;
    diagId -= dec;
    diagRow = getRow(diagId);
  }

  return total;
};

/**
 * Summary: Check row, col, and diagonals of current play for winners.
 * @param {number} col Column in board.
 * @param {number} row Row in board.
 * @param {array}  board Board to check.
 * @param {string} color Player to chcek.
 * @return {bool}  True if it is a winning move, false if not.
 */
const checkRow = (row, id, board, color) => {
  const right = matchesRight(row, id, board, color);
  const left = matchesLeft(row, id, board, color);

  return (
    right > 2 ||
    left > 2 ||
    (right > 1 && left > 0) ||
    (left > 1 && right > 0)
  );
};

const checkColumn = (col, id, board, color) => (
  matchesBelow(col, id, board, color) > 2
);

const checkDiagonals = (row, id, board, color) => {
  const downLeft = matchesDiagonalDown(row, id, board, color, 6);
  const downRight = matchesDiagonalDown(row, id, board, color, 8);
  const upLeft = matchesDiagonalUp(row, id, board, color, 8);
  const upRight = matchesDiagonalUp(row, id, board, color, 6);

  return (
    downLeft === 3 ||
    downRight === 3 ||
    upLeft === 3 ||
    upRight === 3 ||
    (downLeft > 0 && upRight > 1) ||
    (downRight > 0 && upLeft > 1) ||
    (downLeft > 1 && upRight > 0) ||
    (downRight > 1 && upLeft > 0)
  );
};

/**
 * Summary: Identifies if latest move is a winner.
 * @param {number} id Index of latest move in board.
 * @param {array} board Board to check.
 * @param {string} color Player to chcek.
 * @return {bool}  True if it is a winning move, false if not.
 */
export const checkWinner = (id, board, color) => {
  const checkBoard = [...board];
  checkBoard[id] = color;
  const row = getRow(id);
  const col = id - (row * 7);
  return (
    checkRow(row, id, board, color) ||
    checkColumn(col, id, board, color) ||
    checkDiagonals(row, id, board, color)
  );
};
