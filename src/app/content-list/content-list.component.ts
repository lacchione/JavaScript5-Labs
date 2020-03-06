import { Component, OnInit } from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {ContentService} from '../services/content.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  content: Content[];
  constructor(private contentService: ContentService) {}

  ngOnInit() {
      this.contentService.getContentObs().subscribe(c => this.content = c);
  }
    itemSearch(title: string): void{
      const output = <HTMLElement> document.querySelector('.itemSearch > #output');
      let found: boolean = false;
      this.content.forEach(i => {
          if (i.title === title) {
              found = true;
          }
      });
      if (found) {
          output.innerHTML = `"${title}" was found on our list!`;
          output.style.color = 'green';
      } else {
          output.innerHTML = `"${title}" was not found on our list!`;
          output.style.color = 'red';
      }
    }

    addContentToList(newContentItem: Content) {
        this.content.push(newContentItem);
        const myClonedArray  = Object.assign([], this.content);
        this.content = myClonedArray;
    }
}
