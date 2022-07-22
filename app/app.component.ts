import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive';

  // directive css/ ngStyle
  public color=true;
  change()
  {
    this.color=!this.color;
  }

  // ng-container
  public hero=true;

  // ngIf
  public Condition=true;
  // public Condition=false;
  public condition2=true;
  
  public condition=true;
  // public condition=false;

  // sử dụng if..else trong ngIf
  changeCondition()
  {
    this.condition=!this.condition;
  }

  // sử dụng then..else trong ngIf
  public condition1=true;
  changeCondition1()
  {
    this.condition1=!this.condition1;
  }

  // thuộc tính showInfo và caption 
  showInfo:boolean=true;
  caption:string='Hide Text';
  changeData():void{
    this.showInfo=!this.showInfo;
    if(this.showInfo){
      this.caption='Hide Text';
    }else{
      this.caption='Show Text';
    }
  }

  // ngFor
  productList: Array<string>=['Iphone 12 Pro Max', 'Galaxy S10', 'Mackbook Pro 2020','Apple Watch 5']

  numberList: Array<number>=[0,1,2,3,4,5,6,7,8,9,10]
  thuaSo1:number = 1;



  // phép cộng
  value_sh1:number=0
  value_sh2:number=0
  sum:number=0;
  tong:string=""
  getValue(str:string, str1:string)
  {
    this.value_sh1=+str;//đổi chuỗi ra số thì thêm cộng
    this.value_sh2=+str1;
    this.sum= this.value_sh1+this.value_sh2;
    this.tong=this.sum.toString();
  }

  // ngSwitch
  
  // listStudent: Array<any> =new Array<any>(); //cách viết mảng 2
  // ngOnInit(){
  //   this.listStudent=[
  //     {name:'Tuấn', graded:'A'},
  //     {name:'Tú', graded:'B'},
  //     {name:'Trinh', graded:'C'},
  //   ]
  // }
  listStudent: Array<any> =[{name:'Tuấn', graded:'A'},{name:'Tú', graded:'B'},{name:'Trinh', graded:'C'},]

  thang:number = 0;

}
