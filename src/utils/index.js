

/**
 * Summary: Determines if a move is valid.
 */
export const validateMove = (id, board) => {
  const move = board[id];
  const below = board[id + 7];

  return move === '' && below !== '';
};

export const matchesRight = (row, col, id, board, color) => {
  let total = 0;
  let rightId = id + 1;
  let rightRow = Math.floor(rightId / 7);
  while (board[rightId] === color && rightRow === row) {
    total += 1;
    rightId += 1;
    rightRow = Math.floor(rightId / 7);
  }

  return total;
};

const matchesLeft = (row, col, id, board, color) => {
  let total = 0;
  let leftId = id - 1;
  let leftRow = Math.floor(leftId / 7);

  while (board[leftId] === color && leftRow === row) {
    total += 1;
    leftId -= 1;
    leftRow = Math.floor(leftId / 7);
  }

  return total;
};

/**
 * Summary: Given a move, determines if the containing row is a winner.
 * @param {Array}  move - Coordinates of move [row, col].
 * @param {string} role - Players role.
 * @param {array}  board - Board to check.
 * @return {bool}  True if it is a winning move, false if not.
 */
const checkRow = (row, col, id, board, color) => {
  const right = matchesRight(row, col, id, board, color);
  const left = matchesLeft(row, col, id, board, color);

  return (
    right > 2 ||
    left > 2 ||
    (right > 1 && left > 0) ||
    (left > 1 && right > 0)
  );
};

export const checkWinner = (id, board, color) => {
  const checkBoard = [...board];
  checkBoard[id] = color;
  const row = Math.floor(id / 7);
  const col = id - (row * 7);
  return (
    checkRow(row, col, id, board, color)
    // checkColumn(move, board, role) ||
    // checkDiagonals(move, board, role)
  );
};
