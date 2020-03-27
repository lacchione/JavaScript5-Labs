import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTagPipe } from './filter-tag.pipe';
import { HighlightDirective } from './highlight.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    SafePipe,
    ContentListComponent,
    FilterTagPipe,
    HighlightDirective,
    CreateContentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule,
      MatInputModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false, delay: 1000   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
