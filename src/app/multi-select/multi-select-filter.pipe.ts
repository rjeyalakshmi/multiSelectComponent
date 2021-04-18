import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'multiSelectFilter'
})
export class MultiSelectFilterPipe implements PipeTransform {
    transform (items: any[], searchText: string,searchBy:string): any[] {
        if (!items || !searchText) {
            return items;
        }
        return items.filter(
            item => item[searchBy].toLowerCase().includes(searchText.toLowerCase())
          )
     }
  }