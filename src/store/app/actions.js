import * as actionTypes from './actionTypes';

export const updateBoard = (id, player, color) => ({
  type: actionTypes.UPDATE_BOARD,
  payload: { id, player, color }
});

