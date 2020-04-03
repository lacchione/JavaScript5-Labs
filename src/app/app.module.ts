import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTagPipe } from './filter-tag.pipe';
import { HighlightDirective } from './highlight.directive';
import { CreateContentComponent, CreateContentDialogComponent } from './create-content/create-content.component';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    SafePipe,
    ContentListComponent,
    FilterTagPipe,
    HighlightDirective,
    MessagesComponent,
    CreateContentComponent,
    CreateContentDialogComponent,
    ContentDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule,
      MatInputModule,
      MatCardModule,
      MatDividerModule,
      MatDialogModule,
      MatRippleModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, { dataEncapsulation: false, delay: 1000   }),
      RouterModule.forRoot(
          [  { path: 'content/:id', component: ContentDetailComponent },
                    { path: 'content', component: ContentListComponent },
                    { path: '', component: ContentListComponent },
                    { path: '**', component: NotFoundComponent }])
  ],
  entryComponents: [
      CreateContentDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
