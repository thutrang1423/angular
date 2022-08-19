import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryList: Array<any>=[];
  constructor(private categoryService: CategoryService) {
    this.categoryList= this.categoryService.getCategory();
   }

  ngOnInit(): void {
  }

}
