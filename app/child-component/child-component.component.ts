import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() item:string=""; //Input

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
