import { createReducer, on } from '@ngrx/store';
import { setLanguage } from '../actions/configActions';
import { initialConfigState } from '../state';

export const ConfigReducer = createReducer(
  initialConfigState,
  on(setLanguage, (state, { language }) => ({ ...state, language }))
);
