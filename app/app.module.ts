import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingerComponent } from './singer/singer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingerListComponent } from './singer-list/singer-list.component';
import { ToppingSingerComponent } from './topping-singer/topping-singer.component';
import { MusicSingerComponent } from './music-singer/music-singer.component';
import { ListMusicComponent } from './list-music/list-music.component';
import { ListStyleComponent } from './list-style/list-style.component';
import { MusicStyleComponent } from './music-style/music-style.component';
import { LikeMusicComponent } from './like-music/like-music.component';

@NgModule({
  declarations: [
    AppComponent,
    SingerComponent,
    SingerListComponent,
    ToppingSingerComponent,
    MusicSingerComponent,
    ListMusicComponent,
    ListStyleComponent,
    MusicStyleComponent,
    LikeMusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
