import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelect } from '@angular/material/select';
// import {  } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
//    MatSelect
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
//    MatSelect
    MatNativeDateModule
  ]
})
export class MaterialDesignModule { }
