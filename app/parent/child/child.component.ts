import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/demo.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [DemoService] //import demo service vào parent component
})
export class ChildComponent implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
  } 

}
