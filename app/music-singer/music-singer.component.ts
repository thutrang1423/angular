import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AnalyzeService } from '../analyze.service';

@Component({
  selector: 'app-music-singer',
  templateUrl: './music-singer.component.html',
  styleUrls: ['./music-singer.component.css']
})
export class MusicSingerComponent implements OnInit {

  constructor(private analyzeService: AnalyzeService, private activatedRoute: ActivatedRoute) { }

  dataMusic:any = [];
  singerId:any;
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.singerId = params.get('id');
    });
    this.getMusicOfSinger(this.singerId);
  }

  getMusicOfSinger(id:any){
    this.analyzeService.listMusicBySinger(id).subscribe(
      (data: {})=>{this.dataMusic = data}
      )
  }
 
}







  

