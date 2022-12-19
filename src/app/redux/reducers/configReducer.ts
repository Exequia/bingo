import { createReducer, on } from '@ngrx/store';
import { startLoadingActions } from '../actions';
import { setAppLanguage, startProgressLoading, stopProgressLoading } from '../actions/configActions';
import { ConfigState, initialConfigState } from '../state';

export const ConfigReducer = createReducer(
  initialConfigState,
  on(setAppLanguage, (state, { language }) => ({ ...state, language })),
  on(startProgressLoading, (state) => ({
    ...state,
    progress: { ...state.progress, loading: true },
  })),
  on(stopProgressLoading, (state) => ({
    ...state,
    progress: { ...state.progress, loading: false },
  }))
);
