import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'tracks', loadChildren:() => import('../tracks/tracks.module').then(m => m.TracksModule)},
  {path:'tracks', loadChildren:() => import('../favorites/favorites.module').then(m => m.FavoritesModule)},
  {path:'tracks', loadChildren:() => import('../history/history.module').then(m => m.HistoryModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }