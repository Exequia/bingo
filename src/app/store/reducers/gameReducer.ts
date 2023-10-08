import { createReducer, on } from '@ngrx/store';
import { saveGameGift, setGameConfig, setGameRoundData, setGameStatus, setRoundDashboards, updateCellStatus } from '../actions';
import { initialGameState } from '../state/gameState';
import { cloneDeep } from 'lodash';

export const gameReducer = createReducer(
  initialGameState,
  on(setGameStatus, (state, { gameStatus }) => ({
    ...state,
    status: gameStatus
  })),
  on(setGameConfig, (state, { gameConfig }) => ({
    ...state,
    config: gameConfig
  })),
  on(saveGameGift, (state, { gift }) => ({
    ...state,
    gift
  })),
  on(setRoundDashboards, (state, { gameRoundDashboards }) => ({
    ...state,
    roundDashboards: gameRoundDashboards
  })),
  on(setGameRoundData, (state, { roundData }) => ({
    ...state,
    round: roundData
  })),
  on(updateCellStatus, (state, { dashboardIndex, rowIndex, matchCellIndex, cellStatus }) => {
    const updatedState = cloneDeep(state);
    updatedState.roundDashboards![dashboardIndex].rows[rowIndex].cells[matchCellIndex].status = cellStatus;
    return updatedState;
  })
);
