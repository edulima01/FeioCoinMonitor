import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	MdButtonModule,
	MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
