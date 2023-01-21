import { createSelector } from '@ngrx/store';
import { selectGameFeature } from '..';

export const selectGameStatus = createSelector(selectGameFeature, gameState => gameState?.status);

export const selectGameConfig = createSelector(selectGameFeature, gameState => gameState?.config);

export const selectGameGift = createSelector(selectGameFeature, gameState => gameState?.gift);

export const selectRoundDashboards = createSelector(selectGameFeature, gameState => gameState?.roundDashboards);

export const selectRoundData = createSelector(selectGameFeature, gameState => gameState?.round);
