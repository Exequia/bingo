import { createSelector } from '@ngrx/store';
import { selectPlayerFeature } from '..';
 
export const selectPlayerName = createSelector(
  selectPlayerFeature,
  state => state?.name
);