import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameConfig, GameConfigForm, GameVelocity } from '@app/models';
import { UtilsService } from '@app/services/utils/utils.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-game-form',
  templateUrl: './new-game-form.component.html',
  styleUrls: ['./new-game-form.component.scss'],
})
export class NewGameFormComponent {
  @Input() gameConfig: GameConfig | undefined | null = undefined;
  @Output() gameConfigEmmit: EventEmitter<GameConfig> =
    new EventEmitter<GameConfig>();

  gameVelocityValues = this.utils.getEnumNumberValues(GameVelocity);
  velocityControl = new FormControl<GameVelocity>(GameVelocity.standard);
  gameConfigForm = new FormGroup<GameConfigForm>({
    velocity: this.velocityControl,
  });

  constructor(
    private readonly utils: UtilsService
  ) {}

  onSubmit() {
    if (this.gameConfigForm.valid) {
      this.gameConfigEmmit.emit(this.gameConfigForm?.value as GameConfig);
    }
  }
}
