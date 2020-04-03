import { Injectable } from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getContent(): Content[] {
  //       return content;
  //   }
    getContentObs(): Observable<Content[]> {
        this.messageService.add('Content Retrieved');
        return this.http.get<Content[]>('api/content');
    }

    addContentObs(): void {
        this.messageService.add('Content Added!');
        return;
    }

    getContentItem(id: number): Observable<Content> {
        console.log('Retrieving the Content for you', id);
        return this.http.get<Content>('api/content/' + id);
    }

    private httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    addContent(content: Content): Observable<Content> {
        return this.http.post<Content>('api/content', content, this.httpOptions);
    }

    updateContent(content: Content): Observable<any> {
        return this.http.put('api/content', content, this.httpOptions);
    }
}
