import { Component, OnInit } from '@angular/core';
import { } from '../../getdata.service';
import { Lid } from '../Classes/lid';
import { GetdataService } from '../../getdata.service';


interface Graad {
  GraadID: number;
  omschrijving: string;
}

@Component({
  selector: 'app-leden',
  templateUrl: './leden.component.html',
  styleUrls: ['./leden.component.css']
})

export class LedenComponent implements OnInit {

   graden: Graad[] = [
    {GraadID: 0, omschrijving: '0de kyu'},
    {GraadID: 1, omschrijving: '9de kyu'},
    {GraadID: 2, omschrijving: '8de kyu'},
    {GraadID: 3, omschrijving: '7de kyu'},
    {GraadID: 4, omschrijving: '6de kyu'},
    {GraadID: 5, omschrijving: '5de kyu'},
    {GraadID: 6, omschrijving: '4de kyu'},
    {GraadID: 7, omschrijving: '3de kyu'},
    {GraadID: 8, omschrijving: '2de kyu'},
    {GraadID: 9, omschrijving: '1ste kyu'},
    {GraadID: 10, omschrijving: '1ste dan'},
    {GraadID: 11, omschrijving: '2de dan'},
    {GraadID: 12, omschrijving: '3de dan'},
    {GraadID: 13, omschrijving: '4de dan'},
    {GraadID: 14, omschrijving: '5de dan'},
    {GraadID: 15, omschrijving: '6de dan'},
    {GraadID: 16, omschrijving: '7de dan'},
    {GraadID: 17, omschrijving: '8de dan'}
    ];
    Leden: Lid[] = [];
  constructor(private api: GetdataService) {
    this.api.GetLeden ()
    .subscribe(data => {
      for (const d of (data as any)) {
        this.Leden.push({
          Lic: d.Lic,
          Voornaam: d.Voornaam,
          Achternaam: d.Achternaam,
          Geboortedatum: new Date(d.geboortedatum),
          GraadID: d.GraadID,
          Behaaldop: new Date( d.Behaaldop),
          VerzekeringTot: new Date( d.VerzekeringTot),
          Aktief: d.Aktief,
          GDPRok: d.GDPRok
        });
      }
    });
   }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
  }

}
