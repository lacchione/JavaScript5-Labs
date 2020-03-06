import { Injectable } from '@angular/core';
import {content} from '../contentDb';
import {Content} from '../content-card/content-card-helper';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  // getContent(): Content[] {
  //       return content;
  //   }
    getContentObs(): Observable<Content[]> {
        this.messageService.add('Content Retrieved');
        return of(content);
    }

    addContentObs(): void {
        this.messageService.add('Content Added!');
        return;
    }
}
