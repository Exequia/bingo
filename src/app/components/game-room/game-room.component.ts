import { Component, Input } from '@angular/core';
import { GamePlayer } from '@app/models';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss'],
})
export class GameRoomComponent {
  @Input() gamePlayers: GamePlayer[] | undefined | null = undefined;
}
