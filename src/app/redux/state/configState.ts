import { Languages } from 'src/app/models/app';

export interface ConfigState {
  language: Languages;
}

export const initialConfigState: ConfigState = {
  language: Languages.Spanish,
};
