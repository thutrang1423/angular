import { Component, OnInit } from '@angular/core';
import { AnalyzeService } from '../analyze.service';


@Component({
  selector: 'app-like-music',
  templateUrl: './like-music.component.html',
  styleUrls: ['./like-music.component.css']
})
export class LikeMusicComponent implements OnInit {

  constructor(private analyzeService: AnalyzeService) { }


  dataMusics:any;

  ngOnInit(): void {
    this.getListLike();
  }

  getListLike(){
    this.analyzeService.getLikeMusic().subscribe(
      (data: {}) =>{this.dataMusics = data}
      )
  }

  remove(id:any) {
    this.analyzeService.deleteLikeMusic(id).subscribe(res => {
      this.getListLike()
    })
  }

}











  

  






