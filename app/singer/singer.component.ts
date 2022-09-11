import { Component, OnInit,Input } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { AnalyzeService } from '../analyze.service';


@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {

  @Input() SingerDetails = {nameSinger: ''};

  id = this.actRoute.snapshot.params['id'];
  Singerdata: any = {};


  constructor(
    
    public analyzeService: AnalyzeService, public router: Router,
    
    public actRoute: ActivatedRoute,
  ){}
  ngOnInit(): void {
    // this.analyzeService.getSingerById(this.id).subscribe((data: {}) => {
    //   this.Singerdata = data;
    // })
  }

  // addSinger(dataSinger: any) {
  //   this.analyzeService.create(dataSinger).subscribe(
  //     (data: {}) => {
  //     this.router.navigate(['/singer-list']);
  //   });
  // }


  // updateSinger() {
  //   if(window.confirm('Are you sure, you want to update?')){
  //     this.analyzeService.updateSinger(this.id, this.Singerdata).subscribe(data => {
  //       this.router.navigate(['/singer-list'])
  //     })
  //   }
  // }

}





  
  




  


