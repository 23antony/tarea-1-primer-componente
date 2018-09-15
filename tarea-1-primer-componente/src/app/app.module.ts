import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatoPersonalComponent } from './dato-personal/dato-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    DatoPersonalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
