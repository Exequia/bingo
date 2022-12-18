import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivatePlayer } from './guards/can-activate-player.service';
import { HomeComponent } from './views/home/home.component';
import { NewGameComponent } from './views/new-game/new-game.component';
import { NewPlayerComponent } from './views/new-player/new-player.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [CanActivatePlayer] },
  { path: 'game', component: NewGameComponent, canActivate: [CanActivatePlayer] },
  // { path: 'bingo', component: GameComponent, canActivate: [CanActivatePlayer] },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'player', component: NewPlayerComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
