import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule
  ]
})
export class MaterialDesignModule { }
