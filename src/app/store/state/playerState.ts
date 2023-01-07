import { PlayerBase } from '@app/models';

export interface PlayerState extends PlayerBase {
}

export const initialPlayerState: PlayerState = {
  amount: 0,
  owner: false
};
