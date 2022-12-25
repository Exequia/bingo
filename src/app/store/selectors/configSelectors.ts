import { createSelector } from '@ngrx/store';
import { ConfigState } from '../state';
import { ProgressConfig } from '../../models';
import { selectConfigFeature } from '..';

export const selectProgressConfig = createSelector(
  selectConfigFeature,
  (state: ConfigState): ProgressConfig => state.progress
);
