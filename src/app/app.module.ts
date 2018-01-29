import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WindowRef } from './window.service';
import { QuestionService } from './question.service';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WindowRef, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
