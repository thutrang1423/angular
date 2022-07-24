import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: "appDropDown"
})
export class DropdownDirective {

  constructor() { }

  @HostBinding("class.open") isOpen:boolean=false; //trạng thái ban đầu

  @HostListener("click") toggleDropdown()
{
this.isOpen=!this.isOpen;
}
}
