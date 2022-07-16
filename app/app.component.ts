import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent //export class parentComponent
{
  title = 'Hello App';
  welcome = 'Hello Angular, I am from to the fasttrack Academy';

  showData($event:any){
    console.log('Button is click !');
    if ($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  public showMonAn($event:any){
    if($event){
      alert($event.target.value)
    }
  }

  // property binding trong angular để thiết lập giá trị cho các thuộc tính của các phần tử hoặc chỉ thị HTML. Nó được ký hiệu là [].
  userName:string = "Peter";

  cssRed="Red";
  cssBlue=false;

  // Style binding được sử dụng để liên kết dữ liệu từ thành phần vào thuộc tính style HTML 
  myColor="green"

  currentItem = 'Television';//input

  items=['item1','item2'];
  addItem(newItem:string){
    this.items.push(newItem);
  }
}

