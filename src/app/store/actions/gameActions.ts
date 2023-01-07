import { Dashboard, GameConfig, GameStatus, GiftResponse } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const setGameStatus = createAction(
  '[Game] Set game status',
  props<{ gameStatus: GameStatus }>()
);
export const setGameStatusInit = createAction(
  '[Game] Set game status init'
);
const initConfigGame = '[Game] Init configuration game';
export const initConfigurationGame = createAction(
  initConfigGame,
  props<{ gameConfig: GameConfig }>()
);
export const initGameConfigSuccess = createAction(
  `${initConfigGame} Success`,
  props<{ gameConfig: GameConfig }>()
);
export const initGameConfigFailure = createAction(
  `${initConfigGame} Failure`
);
export const setGameStatusShopping = createAction(
  '[Game] Set game status shopping'
);
export const setGameConfig = createAction(
  '[Game] Set game config',
  props<{ gameConfig: GameConfig }>()
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
  initGameConfigSuccess,
  initGameConfigFailure,
];
