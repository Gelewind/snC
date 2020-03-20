import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aanwezig',
  templateUrl: './aanwezig.component.html',
  styleUrls: ['./aanwezig.component.css']
})
export class AanwezigComponent implements OnInit {
  constructor() { }
  encapsulation: ViewEncapsulation.None;
  weekStart = 0;

  daysSelected: any[] = [];
  event: any;

isSelected = (event: any) => {
  const date = event.getFullYear() + '-' + ('00' + (event.getMonth() + 1)).slice(-2) + '-' + ('00' + event.getDate()).slice(-2);
  return this.daysSelected.find(x => x === date) ? 'selected' : null;
}

select(event: any, calendar: any) {
  const date = event.getFullYear() + '-' + ('00' + (event.getMonth() + 1)).slice(-2) + '-' + ('00' + event.getDate()).slice(-2);
  const index = this.daysSelected.findIndex(x => x === date);
  if (index < 0) {
    this.daysSelected.push(date);
    console.log(this.daysSelected);
  }  else {
    this.daysSelected.splice(index, 1);
  }

  calendar.updateTodaysDate();
}

  ngOnInit() {
    this.daysSelected.push('2020-03-01');
    this.daysSelected.push('2020-03-05');
    this.daysSelected.push('2020-02-25');
    this.daysSelected.push('2020-02-15');
  }

}
