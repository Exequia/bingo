import { AbstractControl } from '@angular/forms';

export enum GameStatus {
  pending = 'PENDING',
  initialized = 'INITIALIZED',
  shopping = 'SHOOPING',
  started = 'STARTED',
  finished = 'FINISHED'
}

export interface GameConfig {
  velocity: GameVelocity;
}

export interface GameConfigForm {
  velocity: AbstractControl<GameVelocity | null>;
  rounds: AbstractControl<number | null>;
  minPlayers: AbstractControl<number | null>;
  maxPlayers: AbstractControl<number | null>;
}

export interface GameData {
  round: GameRound;
  history: GameRound[];
}

export enum GameVelocity {
  slow,
  standard,
  high
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
