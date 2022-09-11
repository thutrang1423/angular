import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-example',
  templateUrl: './next-example.component.html',
  styleUrls: ['./next-example.component.css']
})
export class NextExampleComponent implements OnInit {

  constructor() { }
  str: string="";

  ngOnInit(): void {
    const ob= new Observable((observer)=>{
      const id = setTimeout(()=>{
        observer.next("Hello VietUc 1");
        observer.next("Hello VietUc 2");
        observer.complete();
      },1000);
    });

    const subcription = ob.subscribe({
      next(value){
        console.log(value);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log('Done');
      }
    })
    
    setTimeout(()=>{
      subcription.unsubscribe();//huỷ bỏ observable
    },5000);
  }

}
