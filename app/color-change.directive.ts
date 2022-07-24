import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[colorchange]'
})
export class ColorChangeDirective {
  private _defaultColor ="red";
  @Input() colorchange : string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.colorchange="";
   }
  @HostListener('mouseenter') onMouseEnter(){ /*onMouseEnter sự kiện rê chuột vào */
    this.changeColor(this.colorchange || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave(){ /*onMouseLeave sự kiện rê chuột ra*/
    this.changeColor('white');
  }
  private changeColor(color: string){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',color);
  }

}
