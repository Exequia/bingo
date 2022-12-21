import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  URL_GAME,
  URL_GAME_PAGE,
  URL_HOME,
  URL_HOME_PAGE,
  URL_NOT_FOUND,
  URL_NOT_FOUND_PAGE,
  URL_PLAYER,
  URL_PLAYER_PAGE,
  URL_SHOPPING,
  URL_SHOPPING_PAGE,
} from './config/routerConstants';
import { GameGuard } from './guards/game/game.guard';
import { PlayerGuard } from './guards/player/player.guard';
import { HomeComponent } from './views/home/home.component';
import { NewGameComponent } from './views/new-game/new-game.component';
import { NewPlayerComponent } from './views/new-player/new-player.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ShoppingComponent } from './views/shopping/shopping.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [PlayerGuard],
    data: { animation: URL_HOME_PAGE },
  },
  { path: URL_HOME, redirectTo: '', pathMatch: 'full' },
  {
    path: URL_GAME,
    component: NewGameComponent,
    canActivate: [PlayerGuard, GameGuard],
    data: { animation: URL_GAME_PAGE },
  },
  {
    path: URL_SHOPPING,
    component: ShoppingComponent,
    canActivate: [PlayerGuard, GameGuard],
    data: { animation: URL_SHOPPING_PAGE },
  },
  // { path: URL_BINGO, component: GameComponent, canActivate: [PlayerGuard] },
  {
    path: URL_PLAYER,
    component: NewPlayerComponent,
    data: { animation: URL_PLAYER_PAGE },
  },
  {
    path: URL_NOT_FOUND,
    component: PageNotFoundComponent,
    data: { animation: URL_NOT_FOUND_PAGE },
  }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
