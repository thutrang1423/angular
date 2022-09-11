import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @Input() UserDetails = {name: '', email: '', phone:''};

  constructor(public crudService: CrudService, public router: Router) { }
  ngOnInit(): void {}

  addUser(dataUser: any){
    this.crudService.create(this.UserDetails).subscribe((data:{})=>{
      this.router.navigate(['/user-list']);
    })
  }
}
