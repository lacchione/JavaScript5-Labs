import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './content-card/content-card-helper';

@Pipe({
  name: 'filterTag'
})
export class FilterTagPipe implements PipeTransform {

  match: Content[];
  transform(content: Content[], type: string): Content[] {
    this.match = [];
    content.forEach((story: Content) => {
        if (story.type === type) {
          console.log(story);
          this.match.push(story);
        }

    });
    return this.match;
  }

}
