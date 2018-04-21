

/**
 * Summary: Determines if a move is valid.
 */
export const validateMove = (id, board) => {
  const move = board[id];
  const below = board[id + 7];

  return move === '' && below !== '';
};
