import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroBirthComponent } from './hero-birth/hero-birth.component';
import { AppTitlePipe } from './classPipe';
import { ShowPipe } from './show';
import { SqrtPipe } from './sqrt';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthComponent,
    AppTitlePipe, //đưa tên lớp
    ShowPipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
