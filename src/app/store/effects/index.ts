import { ConfigEffects } from './configEffects';
import { GameEffects } from './gameEffects';
import { GamePlayersEffects } from './gamePlayersEffects';
import { PlayerEffects } from './playerEffects';

export * from './configEffects';
export * from './gameEffects';
export * from './gamePlayersEffects';
export * from './playerEffects';

export const appEffects: any[] = [ConfigEffects, GameEffects, GamePlayersEffects, PlayerEffects];
