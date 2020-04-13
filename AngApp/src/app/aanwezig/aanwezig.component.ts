import { Component, OnInit, ViewEncapsulation,  ViewChild  } from '@angular/core';
import { GetdataService } from '../../getdata.service';
import { GegAanwezig } from '../Interfaces/geg-aanwezig';
import { MatCalendar } from '@angular/material/datepicker';
import { finalize } from 'rxjs/operators';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-aanwezig',
  templateUrl: './aanwezig.component.html',
  styleUrls: ['./aanwezig.component.css']
})

export class AanwezigComponent implements OnInit {
//  constructor() { }
// @ViewChild('calendar', {static: false}) calendar: MatCalendar<Date>;
@ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  encapsulation: ViewEncapsulation.None;
  weekStart = 0;
  recsjaar: GegAanwezig[] = [];
  temprecsjaar: GegAanwezig[] = [];
  recsmaand: GegAanwezig[] = [];
  temprecsmaand: GegAanwezig[] = [];
  daysSelected: any[] = [];
  tempdaysSelected: any[] = [];
  event: any;
  minDate: Date = new Date(2017, 8, 1);
  maxDate: Date = new Date();
  selectedMonth: Date;
  dPage: Date = new Date();
  ReloadJaar: boolean;

  constructor(private api: GetdataService, private datepipe: DatePipe ) { }

  isSelected = (event: any) => {
    const date = event.getFullYear() + '-' + ('00' + (event.getMonth() + 1)).slice(-2) + '-' + ('00' + event.getDate()).slice(-2);
    return this.daysSelected.find(x => x === date) ? 'selected' : null;
  }

  select(event: any, calendar: any ) {
    const date = event.getFullYear() + '-' + ('00' + (event.getMonth() + 1)).slice(-2) + '-' + ('00' + event.getDate()).slice(-2);
    const index = this.daysSelected.findIndex(x => x === date);
    if (index < 0) {
      this.daysSelected.push(date);
    }  else {
      this.daysSelected.splice(index, 1);
    }
    calendar.updateTodaysDate();
  }

  ngOnInit() {
    this.api.GetAanwezig ( new Date(this.dPage))
    .pipe(
      finalize(() => {
          this.recsjaar = this.temprecsjaar;
          const js = this.datepipe.transform( this.dPage, 'yyyy-MM-dd');
          this.setJaar (js ?? '');
//          this.recsmaand = this.temprecsmaand;
          this.daysSelected = this.tempdaysSelected;
          this.calendar.activeDate = new Date(this.dPage); // set the active date to the selected date
          this.calendar.updateTodaysDate();
          //this.selectedMonth = new Date(this.dPage);
        }
      ))
    .subscribe(data => {
      for (const thisGeg of (data as GegAanwezig[])) {
        if (thisGeg.Jaar === '1') {
            this.temprecsjaar.push( thisGeg );
        } else if (thisGeg.Maand === '1') {
            this.temprecsmaand.push(thisGeg);
        } else {
            const index = this.tempdaysSelected.findIndex(x => x === thisGeg.Tijdstip);
            if (index < 0) {
              this.tempdaysSelected.push(thisGeg.Tijdstip);
            }
        }
      }
    });
  }

  setJaar( jaar: string) {
    const selJaar = new Date(jaar).getFullYear();
    this.recsmaand = [];
    this.temprecsmaand.forEach( x => {
      if (new Date(x.Tijdstip).getFullYear() === selJaar ) {
        this.recsmaand.push(x);
      }
    });
    this.calendar.activeDate = new Date(jaar); // set the active date to the selected date
    this.calendar.updateTodaysDate();
  }

  setCalendarData(reqDate: string) {
    this.calendar.activeDate = new Date(reqDate); // set the active date to the selected date
    this.calendar.updateTodaysDate();
  }
}
