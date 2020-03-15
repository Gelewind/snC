import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AanwezigComponent } from './aanwezig/aanwezig.component';
import { HomeComponent } from './home/home.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl-BE';
import localeNlExtra from '@angular/common/locales/extra/nl-BE';
import { LidComponent } from './lid/lid.component';

registerLocaleData(localeNl, 'fr-FR', localeNlExtra);

@NgModule({
  declarations: [
    AppComponent,
    AanwezigComponent,
    HomeComponent,
    LidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  // providers: [
  //   {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
