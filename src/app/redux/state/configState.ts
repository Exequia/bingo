import { Languages } from 'src/app/models/app';
import { ProgressConfig } from 'src/app/models/config';

export interface ConfigState {
  language: Languages;
  progress: ProgressConfig;
}

export const initProgressConfig: ProgressConfig = {
  loading: false,
  color: 'warn',
  mode: 'query',
  value: 50,
  bufferValue: 75,
};

export const initialConfigState: ConfigState = {
  language: Languages.Spanish,
  progress: initProgressConfig,
};
