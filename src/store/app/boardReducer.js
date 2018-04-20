import { makeInitialBoard } from '../../utils/dummyData';
import { UPDATE_BOARD } from './actionTypes';

const initialState = { board: makeInitialBoard() };

export default function boardReducer(state = initialState, action) {
  if (action.type === UPDATE_BOARD) {
    const board = [...state.board];
    board[action.payload.id] = action.payload.player;
    return board;
  }

  return state;
}
