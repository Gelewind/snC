import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aanwezig',
  templateUrl: './aanwezig.component.html',
  styleUrls: ['./aanwezig.component.css']
})
export class AanwezigComponent implements OnInit {
  constructor() { }
  encapsulation: ViewEncapsulation.None;
  // title = 'ng-calendar-demo';
  // selectedDate = new Date('2019/09/26');
  // startAt = new Date('2019/09/11');
  // minDate = new Date('2019/09/14');
  // maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
  // year: any;
  // DayAndDate: string;
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
  }

}
