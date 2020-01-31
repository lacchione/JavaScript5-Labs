import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './content-card/content-card-helper';

@Pipe({
  name: 'filterTag'
})
export class FilterTagPipe implements PipeTransform {

  match: Content[];
  transform(content: Content[], type: string): Content[] {
    this.match = [];
    content.forEach((Story: Content) => {
        if (Story.type === type) {
          console.log(Story);
          this.match.push(Story);
        }

    });
    return this.match;
  }

}
