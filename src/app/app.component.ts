import {Component, Input} from '@angular/core';
import {LogUpdateService} from './log-update.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JavaScript5-Labs';
  constructor(private logService: LogUpdateService){ }
}

