import { Component } from '@angular/core';
import { Server } from './app.server'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise2';

  servers:Server[]=[
    {name:"s1", content:"Server 1", type:"server"},
    {name:"s2", content:"Server 2", type:"serverBlue"}
  ];
  
  themServer(name:string, content: string)
  {
    let s=new Server();
    s.name=name;
    s.content=content;
    s.type= "server";
    this.servers.push(s);
  }

  themServerBlue(name:string, content: string)
  {
    let s=new Server();
    s.name=name;
    s.content=content;
    s.type= "serverBlue";
    this.servers.push(s);
  }
}