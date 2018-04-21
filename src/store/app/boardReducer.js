import { buildIntialBoard } from '../../utils/dummyData';
import { UPDATE_BOARD } from './actionTypes';

const initialState = { board: buildIntialBoard() };

export default function board(state = initialState, action) {
  if (action.type === UPDATE_BOARD) {
    console.log('state.board', state.board);
    const newBoard = [...state.board];
    newBoard[action.payload.id] = action.payload.player;
    return { board: newBoard };
  }

  return state;
}
