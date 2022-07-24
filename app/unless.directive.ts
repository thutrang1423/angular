import { Directive,
        Input,
        TemplateRef,
      ViewContainerRef }
       from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(
    private tempLateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.tempLateRef);
    }else{
      this.viewContainer.clear();
    }
  }

}
