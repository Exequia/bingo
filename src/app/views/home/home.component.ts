import { Component } from '@angular/core';
import { RouterFacade } from '@app/redux/facades/routerFacade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private readonly routerFacade: RouterFacade) {}

  newGame() {
    this.routerFacade.navigateTo('game')
  }
}
