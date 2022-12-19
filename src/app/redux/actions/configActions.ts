import { createAction, props } from '@ngrx/store';
import { Languages } from '@models';

export const SET_APP_LANGUAGE = '[Config] Set Language';

export const setAppLanguage = createAction(
  SET_APP_LANGUAGE,
  props<{ language: Languages }>()
);
export const startProgressLoading = createAction('[Config] Start Loading');
export const stopProgressLoading = createAction('[Config] Stop Loading');
