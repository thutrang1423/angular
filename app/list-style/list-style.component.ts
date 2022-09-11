import { Component, OnInit } from '@angular/core';
import { AnalyzeService } from '../analyze.service';


@Component({
  selector: 'app-list-style',
  templateUrl: './list-style.component.html',
  styleUrls: ['./list-style.component.css']
})
export class ListStyleComponent implements OnInit {

  constructor(private analyzeService: AnalyzeService) { }

  dataStyle:any;

  ngOnInit(): void {
    this.getListStyle();
  }

  getListStyle(){
    this.analyzeService.getStyle().subscribe(
      (data: {}) =>{this.dataStyle = data}
      )
  }


}











  

  





