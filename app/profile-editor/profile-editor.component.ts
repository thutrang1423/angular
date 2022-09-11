import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = new FormGroup(
    {
    firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    address:new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
    }
  )

  str:any="";
  str1:any="";

  onSubmit(){
    this.str=this.profileForm.get('firstName')?.value+" "
            +this.profileForm.get('lastName')?.value;

    this.str1=this.profileForm.get("address")?.get('street')?.value + " "
              + this.profileForm.get("address")?.get('city')?.value +" "
              + this.profileForm.get("address")?.get('state')?.value +" "
              + this.profileForm.get("address")?.get('zip')?.value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  get firstName(){
    return this.profileForm.get('firstName');
  }
  get lastName(){
    return this.profileForm.get('lastName');
  }
  // get address(){
  //   return this.profileForm.get('address');
  // }

  // get street(){
  //   return this.profileForm.get("address")?.get('street');
  // }
  // get city(){
  //   return this.profileForm.get("address")?.get('city');
  // }
  // get state(){
  //   return this.profileForm.get("address")?.get('state');
  // }
  // get zip(){
  //   return this.profileForm.get("address")?.get('zip');
  // }

}
