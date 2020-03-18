import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lid',
  templateUrl: './lid.component.html',
  styleUrls: ['./lid.component.css']
})
export class LidComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  startDate: Date;

  constructor() {

    const currentYear = new Date().getFullYear();
    const oneMonth = new Date().getMonth();
    this.minDate = new Date(currentYear - 6, oneMonth + 1, 28);
    this.maxDate = new Date(currentYear - 6, oneMonth + 1, 28);
    this.startDate =  new Date(currentYear - 6, oneMonth + 1, 28);
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
  }

  ngOnInit(): void {
  }

}
