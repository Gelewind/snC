import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AanwezigComponent } from './aanwezig/aanwezig.component';
import { HomeComponent } from './home/home.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { registerLocaleData, DatePipe } from '@angular/common';
import localeNl from '@angular/common/locales/nl-BE';
import localeNlExtra from '@angular/common/locales/extra/nl-BE';
import { LidComponent } from './lid/lid.component';
import { LedenComponent } from './leden/leden.component';
import { DagaanwezigComponent } from './dagaanwezig/dagaanwezig.component';
import { formatDate } from '@angular/common';
import { ExLijstComponent } from './ex-lijst/ex-lijst.component';
import { LoginComponent } from './login/login.component';
import { InschrComponent } from './inschr/inschr.component';


registerLocaleData(localeNl, 'fr-FR', localeNlExtra);

@NgModule({
  declarations: [
    AppComponent,
    AanwezigComponent,
    HomeComponent,
    LidComponent,
    LedenComponent,
    DagaanwezigComponent,
    ExLijstComponent,
    LoginComponent,
    InschrComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialDesignModule,
    HttpClientModule
  ],
  // providers: [
  //   {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  // ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
