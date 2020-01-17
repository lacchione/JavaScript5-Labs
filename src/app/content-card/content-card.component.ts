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
    contentHtml(i:number){

    }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
