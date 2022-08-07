import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  //tạo hàm hiện ngày tháng năm giờ hiện tại
  showTodayDate():Date{ //Date kiểu dữ liệu có sẵn trong angular
    let today = new Date();
    return today;
  }
}
