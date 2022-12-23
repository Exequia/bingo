import { AbstractControl } from '@angular/forms';
import { Dashboard } from './dashboard';

export enum GameStatus {
  pending,
  initialized,
  shopping,
  started,
  finished,
}

export interface GameConfig {
  velocity: GameVelocity;
}

export interface GameConfigForm {
  velocity: AbstractControl<GameVelocity | null>;
}

export interface GameData {
  round: GameRound;
  history: GameRound[];
}

export enum GameVelocity {
  slow,
  standard,
  high,
}

export interface GameRound {
  roundNumber: number;
  results: GameResults;
}

export interface GameResults {
  playerIdLineWinner: number;
  playerIdRoundWinner: number;
}


export interface RoundResponse {
  id: string;
  dashboardsValues: number[][][];
  playerAmount: number;
}