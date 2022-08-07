import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { TimeService } from './time.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { DemoService } from './demo.service';
import { FormsModule } from '@angular/forms'; //import cho service parent và child

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule //import cho service parent và child
  ],
  providers: [HeroService, TimeService, DemoService], //khai báo servise
  bootstrap: [AppComponent]
})
export class AppModule { }
