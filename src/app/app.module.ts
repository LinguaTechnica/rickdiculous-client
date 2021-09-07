import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
