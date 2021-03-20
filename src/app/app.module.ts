import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorchangeDirective } from './colorchange.directive';
import { CompComponent } from './comp/comp.component';
import {DemoPipe }from './demo.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ColorchangeDirective,
    CompComponent,
    DemoPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
