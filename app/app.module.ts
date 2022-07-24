import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorChangeDirective } from './color-change.directive';


import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
