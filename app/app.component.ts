import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai3';

  //khai báo phương thức
  heros: Array<any> = []
  myDate=new Date();

  //phương thức khởi tạo servise
  constructor(private heroService: HeroService, private timeSerice: TimeService) { }

  getHeros /*ngOnInit*/ (): void {
    this.heros = this.heroService.getHeros();
  }

  ngOnInit() {
    this.myDate = this.timeSerice.showTodayDate();
  }


}
