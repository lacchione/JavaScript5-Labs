import { Component, OnInit } from '@angular/core';
import {Content} from '../content-card/content-card-helper';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  content: Content[];
  constructor() {
      this.content = [
          {
            id: 1,
            author: 'Luca',
            imgUrl: 'http://www.inspiremykids.com/wp-content/uploads/2017/02/gamecontroler2.jpeg',
            type: 'Video Games',
            title: 'How to play Video Games',
            body: 'This is how you play Video Games',
            tags: ['Video Games', ' Luca']
          },
          {
            id: 2,
            author: 'Will',
            imgUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/book-shop-2-1104657.png',
            type: 'Books',
            title: 'How to run a Bookstore',
            body: 'This is how you start a bookstore',
            tags: ['Books', ' Will']
          },
          {
            id: 3,
            author: 'Jack',
            imgUrl: 'http://icons.iconarchive.com/icons/thehoth/seo/256/seo-web-code-icon.png',
            type: 'Code',
            title: 'How to write super long code',
            body: 'This is how you write super long code',
            tags: ['Code', ' Jack']
          },
          {
            id: 4,
            author: 'Jaidee',
            imgUrl: 'https://pmforthemasses.com/wp-content/uploads/2014/08/camera.png',
            type: 'Angular',
            title: 'How to play Angular for Dummies',
            body: 'This is how you Angular',
            tags: ['Angular', ' Jaidee']
          },
          {
              id: 5,
              author: 'Draven',
              imgUrl: 'https://pmforthemasses.com/wp-content/uploads/2014/08/camera.png',
              type: 'Sky',
              title: 'Sky is Blue',
              body: 'Why the sky is BLUE',
              tags: []}
              ];
  }

  ngOnInit() {
  }
}
