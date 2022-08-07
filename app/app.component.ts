import { Component } from '@angular/core';
import { MyproductService } from './myproduct.service';
import { MytimeService } from './mytime.service';
import {Product} from './app.product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai3-product';

  myDate=new Date();
  products:Product[]=[];

  // productService;
  constructor(private myproduct: MyproductService, private mytime:MytimeService){
    // this.Myproduct=new Myproduct();
  }
  getProducts(){
    this.products=this.myproduct.getProducts();
  }
  ngOnInit(){
    this.myDate = this.mytime.showTodayDate();
  }
}
