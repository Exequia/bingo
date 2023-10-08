import { Dashboard, DashboardRowCell, DashboardRowCellStatus, GameConfig, GameStatus, GiftResponse, RoundData, ShoppingResponse } from '@app/models';
import { createAction, props } from '@ngrx/store';

export const setGameStatus = createAction('[Game] Set game status', props<{ gameStatus: GameStatus }>());
export const updateGameStatus = createAction('[Game] Update game status', props<{ gameStatus: GameStatus }>());
export const setGameStatusInit = createAction('[Game] Set game status init');
const initConfigGame = '[Game] Init configuration game';
export const initConfigurationGame = createAction(initConfigGame, props<{ gameConfig: GameConfig }>());
export const initGameConfigSuccess = createAction(`${initConfigGame} Success`, props<{ gameConfig: GameConfig }>());
export const initGameConfigFailure = createAction(`${initConfigGame} Failure`);
export const setGameConfig = createAction('[Game] Set game config', props<{ gameConfig: GameConfig }>());
const gameShoppingRound = '[Game] Shopping Round';
export const shoppingRound = createAction(gameShoppingRound, props<{ dashboardAmount: number }>());
export const shoppingRoundSuccess = createAction(`${gameShoppingRound} Success`, props<{ shoppingResponse: ShoppingResponse }>());
export const shoppingRoundFailure = createAction(`${gameShoppingRound} Failure`);
export const saveGameGift = createAction('[Game] Save game Gift', props<{ gift: GiftResponse | undefined }>());
export const manageGameGift = createAction('[Game] Manage game Gift', props<{ gift: GiftResponse | undefined }>());
export const setRoundDashboards = createAction('[Game] Set Round Dashboards', props<{ gameRoundDashboards: Dashboard[] }>());
export const updateGameRoundData = createAction('[Game] Update Round Data', props<{ roundData: RoundData }>());
export const setGameRoundData = createAction('[Game] Set Round Data', props<{ roundData: RoundData }>());
export const setMatchCell = createAction('[Game] Set Match Cell', props<{ dashboardIndex: number; rowIndex: number; matchCellIndex: number }>());
export const updatePlayerDashboards = createAction('[Game] Update player dashboards', props<{ newValue: DashboardRowCell }>());
export const updateCellStatus = createAction(
  '[Game] Update Cell Status',
  props<{ dashboardIndex: number; rowIndex: number; matchCellIndex: number; cellStatus: DashboardRowCellStatus }>()
);
export const gameStartLoadingActions = [initConfigurationGame, shoppingRound];
export const gameStopLoadingActions = [initGameConfigSuccess, initGameConfigFailure, shoppingRoundSuccess, shoppingRoundFailure];
