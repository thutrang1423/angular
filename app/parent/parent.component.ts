import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [DemoService] //import demo service vào parent component
})
export class ParentComponent implements OnInit {

  constructor(public demoService: DemoService) { }

  ngOnInit(): void {
  }

}
