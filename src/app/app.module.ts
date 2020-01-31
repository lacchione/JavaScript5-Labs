import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterTagPipe } from './filter-tag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    SafePipe,
    ContentListComponent,
    FilterTagPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
