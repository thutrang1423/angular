import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  data:number = 100;
  constructor() { 
    console.log(`new data is ${this.data}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit - data is ${this.data}`);
  }

  // sự kiện này được thực thi mỗi khi giá trị của điều kiện đầu vào trong thành phần bị thay đổi, giá trị được Binding vào component bằng phương pháp input properties(dùng @Input)
  ngOnChange(): void {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
}
