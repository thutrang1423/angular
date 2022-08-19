import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { products } from './mock.product';
import { NewComponent } from './new/new.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'products'},
  {path:'products', component: ProductsComponent,
    children:[
      {path:'new', component: NewComponent}
    ]},
  {path:'category', component: CategoryComponent},
  {path:'order', component: OrderComponent},
  {path:'products/:detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
