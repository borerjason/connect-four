import * as actionTypes from './actionTypes';

export const updateBoard = (id, player) => ({
  type: actionTypes.UPDATE_BOARD,
  payload: { id, player }
});
