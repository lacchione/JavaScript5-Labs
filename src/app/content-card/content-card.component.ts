import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
    @Input() content: Content;

  constructor() {}

    ngOnInit(): void {
    }

    displayID(item) {
        console.log('This item id is ' + this.content.id);
    }

}
