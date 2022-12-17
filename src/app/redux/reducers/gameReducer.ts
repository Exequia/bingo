import { createReducer, on } from "@ngrx/store";
import { GameStatus } from "src/app/models/game";
import { initConfigurationGame } from "../actions";
import { initialGameState } from "../state/gameState";

export const gameReducer = createReducer(
    initialGameState,
    on(initConfigurationGame, state => ({ ...state, status: GameStatus.initialized })),
  );