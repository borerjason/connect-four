import { buildIntialBoard } from '../utils';
import { UPDATE_BOARD, RESET_BOARD } from './actionTypes';

const initialState = {
  board: buildIntialBoard(),
  color: 'Blue',
  isWinner: false,
};

export default function game(state = initialState, action) {
  if (action.type === UPDATE_BOARD) {
    const newBoard = [...state.board];
    const { id, color, isWinner } = action.payload;
    const nextColor = color === 'Blue' ? 'Red' : 'Blue';
    newBoard[id] = color;

    return {
      board: newBoard,
      color: nextColor,
      isWinner,
    };
  }
  if (action.type === RESET_BOARD) {
    return initialState;
  }

  return state;
}
