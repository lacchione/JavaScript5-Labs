import { Component, OnInit } from '@angular/core';

export interface Content {
    readonly id: number;
    author: string;
    imgUrl?: string;
    type?: string;
    title: string;
    body: string;
    tags?: string[];
}

class ContentList {
    private _types: Content[];
    constructor() {
        this._types = [];
    }
    get types(): Content[] {
        return this._types;
    }
    set types(i: Content[]) {
        this._types = i;
    }
    addContent(content: Content){
      this._types.push(content);
    }
    countContent() {
        return this._types.length;
    }
    contentHtml(i: number) {
        const siteContent = this.types[i];
        const outputContent = `ID: ${siteContent.id}
                               | Author: ${siteContent.author}
                               | ImgUrl: ${siteContent.imgUrl}
                               | Type: ${siteContent.type}
                               | Title: ${siteContent.title}
                               | Body: ${siteContent.body}
                               | Tags: ${siteContent.tags}`;

        return outputContent;
    }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  content: Content;
  content1: Content;
  content2: Content;
  content3: Content;
  cList: ContentList;
  constructor() {
    this.content = {
      id: 1,
      author: 'Luca',
      imgUrl: 'http://www.inspiremykids.com/wp-content/uploads/2017/02/gamecontroler2.jpeg',
      type: 'Video Games',
      title: 'How to play Video Games',
      body: 'This is how you play Video Games',
      tags: ['Video Games', 'Luca']
    };
    this.content1 = {
        id: 2,
        author: 'Will',
        imgUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/book-shop-2-1104657.png',
        type: 'Books',
        title: 'How to run a Bookstore',
        body: 'This is how you start a bookstore',
        tags: ['Books', 'Will']
    };
    this.content2 = {
        id: 3,
        author: 'Jack',
        imgUrl: 'http://icons.iconarchive.com/icons/thehoth/seo/256/seo-web-code-icon.png',
        type: 'Code',
        title: 'How to write super long code',
        body: 'This is how you write super long code',
        tags: ['Code', 'Jack']
    };
      this.content3 = {
          id: 4,
          author: 'Jaidee',
          imgUrl: 'https://pmforthemasses.com/wp-content/uploads/2014/08/camera.png',
          type: 'Angular',
          title: 'How to play Angular for Dummies',
          body: 'This is how you Angular',
          tags: ['Angular', 'Jaidee']
      };
    this.cList = new ContentList();
    this.cList.addContent(this.content);
    this.cList.addContent(this.content1);
    this.cList.addContent(this.content2);
    this.cList.addContent(this.content3);
  }

    ngOnInit(): void {
        this.cList.addContent(this.content);
        this.cList.contentHtml(0);
        this.processContent(this.content);
    }

    processContent(c: Content): void {
        console.log(c.body);
    }

}
