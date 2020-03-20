import { Component, OnInit, Input } from '@angular/core';
import { Lid } from '../Classes/lid';

@Component({
  selector: 'app-lid',
  templateUrl: './lid.component.html',
  styleUrls: ['./lid.component.css']
})
export class LidComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  lid: Lid;
  constructor() {

    const currentYear = new Date().getFullYear();
    const oneMonth = new Date().getMonth();
    this.minDate = new Date(currentYear - 6, oneMonth + 1, 28);
    this.maxDate = new Date(currentYear - 6, oneMonth + 1, 28);
    this.startDate =  new Date(currentYear - 6, oneMonth + 1, 28);
    this.lid = new Lid(1104, 'Bert', 'claes', 'Plezantstraat 37', '9100',
      'Sint-Niklaas', new Date(1966, 12, 2), 'Sint-Niklaas',
      'bert.claes@edpnet.be', 'bert@edpnet.be', '037650406',
      '0478256068', true, '66120210544');
  }

  ngOnInit(): void {
  }

}
