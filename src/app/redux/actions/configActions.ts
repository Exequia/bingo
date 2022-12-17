import { createAction, props } from '@ngrx/store';
import { Languages } from 'src/app/models';

export const setLanguage = createAction(
  '[Config] Set Language',
  props<{ language: Languages }>()
);
