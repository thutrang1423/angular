import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {path: 'first-component', component: FirstComponent},
  {path: 'second-component', component: SecondComponent},

  // Điều hướng khi mới vào trang sẽ vào trang first component trước
  {path: '', redirectTo:'first-component', pathMatch:'full'},
  
  //truyền dữ liệu URL 
  {path: "contactus/:id/:ten", component: ContactusComponent},
  // cách truyền dữ liệu 2
  // {path: "contactus", component:ContactusComponent,},
  
  // đường link các child trong first component
  {
    path:'first-component',
    component: FirstComponent,
    children:[
      {path: 'child1-component',
      component:Child1Component
      },
      {path:'child2-component',
      component: Child2Component
      }
    ]
  },


  // hiển thị 404 page
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
