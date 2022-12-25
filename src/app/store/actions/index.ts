import { gameStartLoadingActions, gameStopLoadingActions } from './gameActions';

export * from './configActions';
export * from './gameActions';
export * from './playerActions';

export const startLoadingActions = [...gameStartLoadingActions];
export const stopLoadingActions = [...gameStopLoadingActions];
