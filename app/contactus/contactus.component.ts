import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public a:any= "test khai bao bien";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.paramMap.get('id'));
    this.a=this.route.snapshot.paramMap.get('id');
  }
}