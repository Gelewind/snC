import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Lid } from '../Classes/lid';
import { GegAanwData } from '../Interfaces/geg-aanw-data';
import { GetdataService } from '../../getdata.service';
import { finalize } from 'rxjs/operators';

interface Graad {
  GraadID: number;
  omschrijving: string;
}

interface Inputs {
  MaxGr: number;
  MinGr: number;
  MinLeeft: number;
  MaxLeeft: number;
  Lic: number;
  Active: string;
}

@Component({
  selector: 'app-dagaanwezig',
  templateUrl: './dagaanwezig.component.html',
  styleUrls: ['./dagaanwezig.component.css']
})

export class DagaanwezigComponent implements OnInit {
  BasicFilter: Inputs = {MaxGr: -1, MinGr: -1, MinLeeft: 6, MaxLeeft: 100, Lic: 0, Active: 'true'};
  dag: Date = new Date();
  graden: Graad[] = [
    {GraadID: -1, omschrijving: ''},
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
  inputs: Inputs;
  templid: Lid;
  ledenfilter: boolean;
  Leden: Lid[] = [];
  LedenAfw: Lid[] = [];
  LedenAanw: Lid[] = [];
  LedenAfwShown: Lid[] = [];
  LedenAanwShown: Lid[] = [];
  AanwData: GegAanwData[] = [];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.PipeTransform();
  }

  changeDate() {
    this.api.GetDagAanw (this.dag)
    .pipe(
      finalize(() => {
        this.LedenAanw = [];
        this.LedenAfw = [];
        console.log( this.AanwData);
        let i = 0;
        let j = 0;
        while ( i < this.Leden.length && j < this.AanwData.length) {
          while (i < this.Leden.length && this.Leden[i].Lic < this.AanwData[j].Licentie) {
            console.log(this.Leden[i].Lic + ' vs ' + this.AanwData[j].Licentie);
            this.LedenAfw.push(this.Leden[i]);
            i++;
          }
          console.log(this.Leden[i].Lic + ' equals ' + this.AanwData[j].Licentie);
          this.LedenAanw.push(this.Leden[i]);
          i++;
          j++;
        }
        //   console.log('f=' + f.length + ' ' + xLid.Lic);
        //   if (f) {
        //     this.LedenAanw.push(xLid);
        //   } else {
        //     this.LedenAfw.push(xLid);
        //   }
        // }
        // tslint:disable-next-line:max-line-length
        console.log('L=' + this.Leden.length + ' Data=' + this.AanwData.length + ' Af=' + this.LedenAfw.length + ' Aanw=' + this.LedenAanw.length);
        this.PipeTransform();
      }))
      .subscribe(datalic => {
        for (const AanLid of (datalic as GegAanwData[])) {
          this.AanwData.push( AanLid );
        }
  //      this.PipeTransform();
      });
  }

  calcAge(birthday: Date) {
    const year = birthday.getFullYear();
    const month = birthday.getMonth();
    const day = birthday.getDay();
    const now = new Date();
    let age = now.getFullYear() - year;
    const mdif = now.getMonth() - month;
    if (mdif < 0) {
        --age;
    } else if (mdif === 0) {
        const ddif = now.getDate() - day;
        if (ddif < 0) {
          --age;
        }
    }
    return age;
  }

  clearFilter() {
    this.inputs = this.BasicFilter;
    this.PipeTransform();
  }

  PipeTransform() {
    this.LedenAfwShown = this.LedenAfw.filter(thislidAf =>
      (thislidAf.GraadID >= this.inputs.MinGr || this.inputs.MinGr === -1)
      && (thislidAf.GraadID <= this.inputs.MaxGr || this.inputs.MaxGr === -1)
      && (this.inputs.Lic === 0 || thislidAf.Lic === this.inputs.Lic)
      && this.calcAge(thislidAf.Geboortedatum) >= this.inputs.MinLeeft
      && this.calcAge(thislidAf.Geboortedatum) <= this.inputs.MaxLeeft
      && (this.inputs.Active === ''
      || (this.inputs.Active === 'true' && thislidAf.Aktief)
      || this.inputs.Active === 'false' && !thislidAf.Aktief) );
    this.LedenAanwShown = this.LedenAanw.filter(thislidAan =>
      (thislidAan.GraadID >= this.inputs.MinGr || this.inputs.MinGr === -1)
      && (thislidAan.GraadID <= this.inputs.MaxGr || this.inputs.MaxGr === -1)
      && (this.inputs.Lic === 0 || thislidAan.Lic === this.inputs.Lic)
      && this.calcAge(thislidAan.Geboortedatum) >= this.inputs.MinLeeft
      && this.calcAge(thislidAan.Geboortedatum) <= this.inputs.MaxLeeft
      && (this.inputs.Active === ''
      || (this.inputs.Active === 'true' && thislidAan.Aktief)
      || this.inputs.Active === 'false' && !thislidAan.Aktief) );
  }

  trackByMethod(index: number, el: any): number {
    return el.Lic;
  }


  constructor(private api: GetdataService) {
    this.ledenfilter = false;
    this.Leden = Array();
    this.LedenAanw = Array();
    this.LedenAfw = Array();
    this.inputs = {MaxGr: -1, MinGr: -1, MinLeeft: 6, MaxLeeft: 100, Lic: 0, Active: ''};
    this.api.GetLeden ()
    .subscribe(data => {
      for (const thisLid of (data as any)) {
        // tslint:disable-next-line:max-line-length
        this.Leden.push( new Lid(thisLid.Lic, thisLid.Voornaam, thisLid.Achternaam, thisLid.geboorteDatum, thisLid.GraadID, thisLid.Behaaldop, thisLid.VerzekeringTot, thisLid.Aktief, thisLid.GDPRok) );
      }
    });
    this.LedenAfw = this.Leden;
    this.LedenAfwShown = this.LedenAfw;
    // console.log(this.Leden[0].Lic);
  }

  ngOnInit(): void {
    Array.prototype.push.apply(this.LedenAfw, this.Leden);
  }

}
