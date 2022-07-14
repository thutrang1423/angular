import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  appName = "Hello, Fasttrack program"
  constructor() { }

  
// sự kiện được thực thi khi khởi tạo component. sự kiện này chỉ được gọi một lần, ngay sau sự kiện ngOnChange(). Sự kiện này chủ yếu đucợ sư rử dụng đề khởi tạo dữ liệu trong một component. 
  ngOnInit(): void {
  }

}
