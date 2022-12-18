import { Component, Input } from '@angular/core';
import { Player } from '@app/models';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent {
  @Input() gamePlayers: Player[] | undefined | null = undefined;

}
