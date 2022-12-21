import { ConfigEffects } from './configEffects';
import { GameEffects } from './gameEffects';
import { PlayerEffects } from './playerEffects';

export * from './configEffects';
export * from './gameEffects';
export * from './playerEffects';

export const appEffects: any[] = [ConfigEffects, GameEffects, PlayerEffects];
