import { Injectable } from '@angular/core';
import { category } from './mock.category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public _category:Array<any> = [];

  constructor() { }

  getCategory(){
    return this._category = category;
  }
}
