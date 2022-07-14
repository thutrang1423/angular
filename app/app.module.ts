import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TextComponent } from './text/text.component';

// NgModel cho phép hiển thị thuộc tính dữ liệu và cập nhập thuộc tính đó khi người dùng thực hiện thay đổi
// để sử dụng NgModel trong wungs dụng chúng ta cần cấu hình FormsModule trong AppModule 
import { FormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    TextComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
