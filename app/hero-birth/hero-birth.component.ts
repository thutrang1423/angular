import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birth',
  templateUrl: './hero-birth.component.html',
  styleUrls: ['./hero-birth.component.css']
})
export class HeroBirthComponent implements OnInit {

  birthday = new Date(1988,3,15);
  jsonData = {name:'Trang', age:'21', address:{quận:'10', tp:'Hồ Chí Minh'}};
  months = ["Jan","Feb","Mar","April","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];


  //4
  value: number = 35.879612312;
  value1: number = 5.1231345;
  value2: number = 5.8;

  Name="Hồ Thu Trang";

  //2,3


  toggle = true;//satrt with true == shortDate 

  get format(){
    return this.toggle ? 'shortDate':'fullDate'
  }

  toggleFormat(){
    this.toggle= !this.toggle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
