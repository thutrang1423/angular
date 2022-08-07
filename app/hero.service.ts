import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heros: Array<any> = [
    {name: 'Hero name 1', age: 20},
    {name: 'Hero name 2', age: 23},
    {name: 'Hero name 3', age: 25},
  ]
  constructor() { }

  getHeros(): Array<any>{
    return this.heros;
  }
}
