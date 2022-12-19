import { GameConfig } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const INIT_CONFIGURATION_GAME = '[Game] Init configuration game';

export const initConfigurationGame = createAction(
  INIT_CONFIGURATION_GAME,
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
