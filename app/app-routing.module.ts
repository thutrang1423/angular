import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'customers',
   loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) 
  },
  {
    path:'order',
   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) 
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
