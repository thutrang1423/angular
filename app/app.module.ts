import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MyproductService } from './myproduct.service';
import { MytimeService } from './mytime.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyproductService,MytimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
