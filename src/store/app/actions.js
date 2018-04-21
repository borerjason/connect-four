import { UPDATE_BOARD, RESET_BOARD } from './actionTypes';

export const updateBoard = (id, color, isWinner) => ({
  type: UPDATE_BOARD,
  payload: { id, color, isWinner },
});

export const resetBoard = () => ({ type: RESET_BOARD });
