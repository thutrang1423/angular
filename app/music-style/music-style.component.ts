import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AnalyzeService } from '../analyze.service';

@Component({
  selector: 'app-music-style',
  templateUrl: './music-style.component.html',
  styleUrls: ['./music-style.component.css']
})
export class MusicStyleComponent implements OnInit {

  constructor(private analyzeService: AnalyzeService, private activatedRoute: ActivatedRoute) { }
  
  

  dataMusic:any = [];
  styleId:any;
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.styleId = params.get('id');
    });
    this.getMusicOfStyle(this.styleId);
  }

  getMusicOfStyle(id:any){
    this.analyzeService.listMusicByStyle(id).subscribe(
      (data: {})=>{this.dataMusic = data}
      )
  }

}







  


