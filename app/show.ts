import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
  name:'show'
})

export class ShowPipe implements PipeTransform {
  transform(resourceId: any, addText:string="Add", editText:string="Edit"): string {
    return resourceId ? editText:addText;
  }
}
