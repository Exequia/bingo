import { GameConfig, GameStatus } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const setGameStatus = createAction(
  '[Game] Set game status',
  props<{ gameStatus: GameStatus }>()
);
export const initConfigurationGame = createAction(
  '[Game] Init configuration game',
  props<{ gameConfig: GameConfig }>()
);
export const initConfigurationGameSuccess = createAction(
  '[Game] Init configuration game Success'
);
export const initConfigurationGameFailure = createAction(
  '[Game] Init configuration game Failure'
);

export const gameStartLoadingActions = [initConfigurationGame];
export const gameStopLoadingActions = [
  initConfigurationGameSuccess,
  initConfigurationGameFailure,
];
