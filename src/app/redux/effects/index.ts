import { ConfigEffects } from './configEffects';
import { PlayerEffects } from './playerEffects';

export * from './configEffects';
export * from './playerEffects';

export const appEffects: any[] = [ConfigEffects, PlayerEffects];
