import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList: Array<any>=[];
  
  constructor(private productService: ProductsService) {
    this.productList= this.productService.getProducts();
   }

  ngOnInit(): void {
  }
 
}
