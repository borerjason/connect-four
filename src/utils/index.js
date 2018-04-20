

/**
 * Summary: Determines if a move is valid.
 */
export const validateMove = (id, board) => {
  // move is in valid if the spot is not empty
  const move = board[id];
  const below = board[id + 7];

  return move === '' && below !== '';
};

export const 
