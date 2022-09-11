import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms';
// import { FormsModule,  } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor() { }

  book = {name:'123', year:1993, stars:null};
  userName="admin";

  ngOnInit(): void {
  }
  onSubmit(form:NgForm):void{
    alert(form);
  }
  test(){
    alert("test");
  }

}
