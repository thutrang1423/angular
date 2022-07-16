import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';//Output, eventEmitter

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() item:string=""; //Input

  @Output() newItemEvent = new EventEmitter<string>();//output

  addNewItem(value: string){//output
    this.newItemEvent.emit(value);//output
  }
  constructor() { }

  ngOnInit(): void {
  }

}
