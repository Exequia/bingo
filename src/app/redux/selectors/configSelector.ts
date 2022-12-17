import { createSelector } from '@ngrx/store';
import { AppState, ConfigState } from '../state';
import { ProgressConfig } from '../../models';
import { selectConfig } from '..';
 
export const selectProgressConfig = createSelector(
  selectConfig,
  (state: ConfigState): ProgressConfig => state.progress
);