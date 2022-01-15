import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

import { KarateService } from '../../service/karate.service'
import { ActieveLid } from '../../class/actieve-lid'
import { DateDatum } from '../../class/training-datums'

import { FormBuilder } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';


@Component({
  selector: 'app-aanwezig',
  templateUrl: './aanwezig.component.html',
  styleUrls: ['./aanwezig.component.scss']
})
export class AanwezigComponent implements OnInit {
  maxdate = new Date();
  selectedDate: any;
  aktieveLeden :ActieveLid[] = [];

  datesToHighlight :DateDatum[] = []; // = ["2019-01-22T18:30:00.000Z", "2019-01-23T18:30:00.000Z", "2019-01-24T18:30:00.000Z", "2019-01-28T18:30:00.000Z", "2019-01-29T18:30:00.000Z", "2019-01-23T18:30:00.000Z", "2019-01-30T18:30:00.000Z", "2019-01-25T18:30:00.000Z"];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  checkoutForm = this.formBuilder.group({
    minleeftijd: 0,
    maxleeftijd: 100,
    datum: null
  });
  constructor(private formBuilder: FormBuilder, private karateService: KarateService) {     
  }

  ngOnInit(): void {
  
    this.karateService.GetActiveLeden().subscribe(data => {
      this.aktieveLeden = data.Rows;
    })
    this.karateService.getTrainingDatums().subscribe(data=> {
      this.datesToHighlight = data.Rows; 
    })
  }

  onSubmit(): void {
    // Process checkout data here
   // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  changeEvent(event:any){
//    console.log(event.value);
      this.karateService.GetGraden();
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate.Tijdstip))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      
      return highlightDate ? 'isTraining' : '';
    };
  }
}
