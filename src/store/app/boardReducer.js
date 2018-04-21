import { buildIntialBoard } from '../../utils/dummyData';
import { UPDATE_BOARD } from './actionTypes';

const initialState = {
  board: buildIntialBoard(),
  player: 'Player1',
  color: 'Blue',
};

export default function game(state = initialState, action) {
  if (action.type === UPDATE_BOARD) {
    const newBoard = [...state.board];
    const { id, player, color } = action.payload;
    newBoard[id] = color;
    const nextPlayer = player === 'Player 1' ? 'Player 2' : 'Player 1';
    const nextColor = color === 'Blue' ? 'Red' : 'Blue';
    return { board: newBoard, player: nextPlayer, color: nextColor };
  }

  return state;
}
