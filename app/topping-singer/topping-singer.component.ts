import { Component, OnInit } from '@angular/core';
import { AnalyzeService } from '../analyze.service';

@Component({
  selector: 'app-topping-singer',
  templateUrl: './topping-singer.component.html',
  styleUrls: ['./topping-singer.component.css']
})
export class ToppingSingerComponent implements OnInit {

  constructor(private analyzeService: AnalyzeService) { }

  dataSinger:any;

  ngOnInit(): void {
    this.getListSinger();
  }

  getListSinger(){
    this.analyzeService.getSinger().subscribe(
      (data: {}) =>{this.dataSinger = data}
      )
  }

}







  

  




