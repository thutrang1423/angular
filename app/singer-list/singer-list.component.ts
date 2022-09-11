import { Component, OnInit } from '@angular/core';
import { AnalyzeService } from '../analyze.service';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  Singers: any = [];

  constructor( public analyzeService: AnalyzeService) { }

  ngOnInit(): void {
    // this.fetchSinger()
  }

  // fetchSinger() {
  //   return this.analyzeService.getSinger().subscribe((data: {}) => {
  //     this.Singers = data;
  //   })
  // }

  // remove(id:any) {
  //   this.analyzeService.deleteSinger(id).subscribe(res => {
  //     this.fetchSinger()
  //   })
  // }

}




 


  

  
  


