import * as actionTypes from './actionTypes';

export const updateBoard = (id, color, isWinner) => ({
  type: actionTypes.UPDATE_BOARD,
  payload: { id, color, isWinner },
});

export const resetBoard = () => ({ type: actionTypes.RESET_BOARD });
