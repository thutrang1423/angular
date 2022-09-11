import { Component, OnInit } from '@angular/core';
import { AnalyzeService } from '../analyze.service';
import { Router ,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  Musics: any = [];

  constructor(public analyzeService: AnalyzeService,public router: Router,
    
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchMusic()
  }

  fetchMusic() {
    return this.analyzeService.getMusics().subscribe((data: {}) => {
      this.Musics = data;
    })
  }

  AddMusic (music:any) {
    this.analyzeService.createLikeMusic(music).subscribe(
      (data: {}) => {
      this.router.navigate(['/like-music']);
    });
  }

}




 


  

  
  


