import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytimeService {

  constructor() { }

  showTodayDate():Date{
    let today = new Date();
    return today;
  }
}
