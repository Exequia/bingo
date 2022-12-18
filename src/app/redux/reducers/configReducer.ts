import { createReducer, on } from '@ngrx/store';
import { setAppLanguage } from '../actions/configActions';
import { initialConfigState } from '../state';

export const ConfigReducer = createReducer(
  initialConfigState,
  on(setAppLanguage, (state, { language }) => ({ ...state, language }))
);
