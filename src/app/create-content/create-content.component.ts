import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

    @Input() startingId; // made it dynamic so it's based on the current length of the band list
    @Output() newContentEvent = new EventEmitter<Content>();
    newContentItem: Content;
    currentId: number;
    title: string;
    author: string;
    body: string;
    type: string;
    imgUrl: string;
    tags: string;
    error: string;
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.currentId = this.startingId;
  }
  submit(title: string, author: string, body: string, type: string, imgUrl?: string, tags?: string): void {

      const ourPromise = new Promise((success, fail) => {
        this.newContentItem = {
            id: this.currentId,
            title: title,
            author: author,
            body,
            type: type,
            imgUrl: imgUrl,
            tags: [tags]
        };
          if (title && author && body && type) {
              this.currentId++;
              this.newContentEvent.emit(this.newContentItem);
              this.contentService.addContentObs();
              success(`${title} has been successfully added`);
          } else {
              fail('Content was NOT NOT NOT NOT added successfully');
          }
      });
      ourPromise.then((successResult) => {
        this.error = '';
        this.title = '';
        this.author = '';
        this.body = '';
        this.type = '';
        this.imgUrl = '';
        this.tags = '';
        return console.log(successResult); })
          .catch(failResult => this.error = failResult);
  }
}
