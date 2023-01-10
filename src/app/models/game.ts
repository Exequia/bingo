import { AbstractControl } from '@angular/forms';
import { RoundDashboardResponse } from './dashboard';
import { PlayerBase } from './player';

export enum GameStatus {
  pending = 'PENDING',
  initialized = 'INITIALIZED',
  shopping = 'SHOPPING',
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
  slow = 'SLOW',
  standard = 'STANDARD',
  high = 'HIGH'
}

export interface GameRound {
  roundNumber: number;
  results: GameResults;
}

export interface GameResults {
  playerIdLineWinner: number;
  playerIdRoundWinner: number;
}

export interface ShoppingRequest {
  playerId: string;
  dashboardAmount: number;
}

export interface ShoppingResponse {
  dashboards: RoundDashboardResponse[];
  player: PlayerBase;
}
