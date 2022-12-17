import { ConfigState } from './configState';
import { GameState } from './gameState';

export interface AppState {
  config: ConfigState,
  game: GameState
}
