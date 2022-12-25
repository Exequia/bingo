import { Dashboard, GameConfig, GameStatus, GiftResponse } from '@app/models';
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
export const shoppingRound = createAction(
  '[Game] Shopping Round',
  props<{ dashboardAmount: number }>()
);
export const saveGameGift = createAction(
  '[Game] Save game Gift',
  props<{ gift: GiftResponse | undefined }>()
);
export const manageGameGift = createAction(
  '[Game] Manage game Gift',
  props<{ gift: GiftResponse | undefined }>()
);
export const setRoundDashboards = createAction(
  '[Game] Set Round Dashboards',
  props<{ gameRoundDashboards: Dashboard[] }>()
);



export const gameStartLoadingActions = [initConfigurationGame];
export const gameStopLoadingActions = [
  initConfigurationGameSuccess,
  initConfigurationGameFailure,
];
