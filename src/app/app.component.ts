import {Component, Input} from '@angular/core';
import {Content} from './content-card/content-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JavaScript5-Labs';
  @Input() content: Content;
}

