import { Component, OnInit } from '@angular/core';
import { URL_GAME } from '@app/config/routerConstants';
import { GameStatus } from '@app/models';
import { GameFacade } from '@app/redux/facades/gameFacade';
import { RouterFacade } from '@app/redux/facades/routerFacade';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gameStatus$ = this.gameFacade.gameStatus$;

  constructor(
    private readonly gameFacade: GameFacade,
    private readonly routerFacade: RouterFacade
  ) {}

  ngOnInit(): void {
    this.gameStatus$
      .pipe(filter((status) => status !== GameStatus.pending))
      .subscribe((status) => {
        console.log(status);
        this.routerFacade.navigateTo(URL_GAME);
      });
  }

  newGame() {
    this.gameFacade.setGameStatusInit();
  }
}
