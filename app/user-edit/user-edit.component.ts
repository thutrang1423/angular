import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userData: any = {};
  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router :Router
  ) { }

  ngOnInit(): void {
    this.crudService.getUser(this.id).subscribe((data:{})=>{
      this.userData;
    })
  }

  updateUser(){
    if(window.confirm('Are you sure, you want to update?')){
      this.crudService.update(this.id, this.userData).subscribe(data => {
        this.router.navigate(['/user-list'])
      })
    }
  }

}

