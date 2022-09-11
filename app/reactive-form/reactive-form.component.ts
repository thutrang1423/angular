import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  name = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]);
  pass = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]);

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue("Nguyen Van A");
  }

}
