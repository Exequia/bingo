import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GAME_MAX_PLAYERS_DEFAULT, GAME_MIN_PLAYERS_DEFAULT, GAME_ROUNDS_DEFAULT, GAME_ROUNDS_MIN } from '@app/config';
import { GameConfig, GameConfigForm, GameVelocity } from '@app/models';
import { UtilsService } from '@app/services/utils/utils.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.scss']
})
export class NewGameFormComponent {
  @Input() gameConfig: GameConfig | undefined | null = undefined;
  @Output() gameConfigEmmit: EventEmitter<GameConfig> = new EventEmitter<GameConfig>();

  gameVelocityValues = this.utils.getEnumNumberValues(GameVelocity);
  velocityControl = new FormControl<GameVelocity>(GameVelocity.high, [Validators.required]);
  roundsControl = new FormControl<number>(GAME_ROUNDS_DEFAULT, [Validators.required]);
  roundsMinValue = GAME_ROUNDS_MIN;
  minPlayersValue = GAME_MIN_PLAYERS_DEFAULT;
  minPlayersControl = new FormControl<number>(GAME_MIN_PLAYERS_DEFAULT, [Validators.required]);
  maxPlayersControl = new FormControl<number>(GAME_MAX_PLAYERS_DEFAULT, [Validators.required]);
  gameConfigForm = new FormGroup<GameConfigForm>({
    velocity: this.velocityControl,
    rounds: this.roundsControl,
    minPlayers: this.minPlayersControl,
    maxPlayers: this.maxPlayersControl
  });

  get rounds() {
    return this.gameConfigForm.get('rounds');
  }

  get minPlayers() {
    return this.gameConfigForm.get('minPlayers');
  }

  get minPlayersMaxValue() {
    return this.gameConfigForm.get('maxPlayers')?.value || this.minPlayersValue;
  }

  get maxPlayers() {
    return this.gameConfigForm.get('maxPlayers');
  }

  constructor(private readonly utils: UtilsService, private translate: TranslateService) {}


  getRoundsErrorMessage(): string {
    if (this.rounds?.hasError('required')) {
      return this.translate.instant('common.error.required');
    }
    if (this.rounds?.hasError('min')) {
      return this.translate.instant('common.error.min', {value: this.minPlayersValue});
    }
    return '';
  }

  getMinPlayerErrorMessage(): string {
    if (this.minPlayers?.hasError('required')) {
      return this.translate.instant('common.error.required');
    }
    if (this.minPlayers?.hasError('min')) {
      return this.translate.instant('common.error.min', {value: this.minPlayersValue});
    }
    if (this.minPlayers?.hasError('max')) {
      return this.translate.instant('common.error.max', {value: this.roundsMinValue});
    }
    return '';
  }

  getMaxPlayerErrorMessage(): string {
    if (this.maxPlayers?.hasError('required')) {
      return this.translate.instant('common.error.required');
    }
    if (this.maxPlayers?.hasError('min')) {
      return this.translate.instant('common.error.min', {value: this.minPlayersValue});
    }
    return '';
  }
  
  onSubmit() {
    if (this.gameConfigForm.valid) {
      this.gameConfigEmmit.emit(this.gameConfigForm?.value as GameConfig);
    }
  }
}
