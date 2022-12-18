import { Player } from '@app/models';

export interface PlayerState extends Player {
}

export const initialPlayerState: PlayerState = {
  amount: 0
};
