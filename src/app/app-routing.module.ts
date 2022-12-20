import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL_GAME, URL_HOME, URL_PLAYER, URL_SHOPPING } from './config/contants';
import { GameGuard } from './guards/game/game.guard';
import { PlayerGuard } from './guards/player/player.guard';
import { HomeComponent } from './views/home/home.component';
import { NewGameComponent } from './views/new-game/new-game.component';
import { NewPlayerComponent } from './views/new-player/new-player.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ShoppingComponent } from './views/shopping/shopping.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [PlayerGuard] },
  { path: URL_HOME, redirectTo: '', pathMatch: 'full' },
  { path: URL_GAME, component: NewGameComponent, canActivate: [PlayerGuard, GameGuard] },
  {
    path: URL_SHOPPING,
    component: ShoppingComponent,
    canActivate: [PlayerGuard, GameGuard],
  },
  // { path: URL_BINGO, component: GameComponent, canActivate: [PlayerGuard] },
  { path: URL_PLAYER, component: NewPlayerComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
