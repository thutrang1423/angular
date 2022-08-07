import { Injectable } from '@angular/core';
import { Product } from './app.product';

@Injectable({
  providedIn: 'root'
})
export class MyproductService {
  public getProducts(){
    let products:Product[];
    products=[
      new Product(1,'Memory Card',500),
      new Product(2,'Pen Drive',750),
      new Product(3,'Power Bank',100)
    ]
    return products;
  }
  constructor() { }
}
