import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public id ='';
  public name ='';
  public description ='';
  public category ='';
  public order ='';
  public productList: Array<any> =[];
  public productPush ={};

  constructor(private products: ProductsService) {
    this.productList = this.products.getProducts();
   }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.productPush={
      id: this.id,
      name: this.name,
      description:this.description,
      category: this.category,
      order: this.order
    };

    this.productList.push(this.productPush);
  }

} 
