import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public detailArr: any = {};

  constructor(private route: ActivatedRoute, private detailProduct: ProductsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('id'));

    this.detailArr = this.detailProduct.getProducts().find(product => postIdFromRoute)
  }

}
