import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeMusicComponent } from './like-music/like-music.component';
import { ListMusicComponent } from './list-music/list-music.component';
import { ListStyleComponent } from './list-style/list-style.component';
import { MusicSingerComponent } from './music-singer/music-singer.component';
import { MusicStyleComponent } from './music-style/music-style.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { SingerComponent } from './singer/singer.component';
import { ToppingSingerComponent } from './topping-singer/topping-singer.component';

const routes: Routes = [
  { path: 'singer', component: SingerComponent },
  { path: 'singer-list', component: SingerListComponent},
  { path: 'music-list', component: ListMusicComponent},
  { path: 'music-list/:id', component: ListMusicComponent},
  { path: 'toppingSinger', component: ToppingSingerComponent},
  { path: 'singer/:id', component: SingerComponent},
  { path: 'music-singer/:id', component: MusicSingerComponent},
  { path: 'music-style/:id', component: MusicStyleComponent},
  { path: 'style-list', component: ListStyleComponent},
  { path: 'like-music', component: LikeMusicComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
