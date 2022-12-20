import { createSelector } from '@ngrx/store';
import { selectGameFeature } from '..';

export const selectGameStatus = createSelector(
  selectGameFeature,
  (gameState) => gameState?.status
);

export const selectGameConfig = createSelector(
  selectGameFeature,
  (gameState) => gameState?.config
);

export const selectGamePlayers = createSelector(
  selectGameFeature,
  (gameState) => gameState?.players
);
