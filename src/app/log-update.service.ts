import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate) {
      updates.available.subscribe(event => {
          console.log('The current version is', event.current);
          console.log('The most recent available version is', event.available);
      });
      updates.activated.subscribe(event => {
          console.log('The old version was', event.previous);
          console.log('The new version is', event.current);
      });
  }
}
