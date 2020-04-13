import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetdataService } from '../../getdata.service';
import { Inschr } from '../Interfaces/inschr';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-inschr',
  templateUrl: './inschr.component.html',
  styleUrls: ['./inschr.component.css']
})
export class InschrComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedCols2: string[] = ['InschrijvingID', 'Voornaam', 'Achternaam', 'StraatNr']; // 'PostCode', 'Gemeente', 'Mobile', 'Tel', 'Email', 'Nationaliteit', 'GeboortePlaats', 'GeboorteDatum', 'RijksregisterNr', 'PrivacyVKF', 'PrivacysckSN', 'Geslacht'];

  dataSource: MatTableDataSource<Inschr> ;
  TempData: Inschr[] = [];


  constructor(private api: GetdataService) { }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit(): void {
    this.api.getInschr ()
    .pipe(
      finalize(() => {
        this.dataSource = new MatTableDataSource<Inschr>(this.TempData) ;
        this.dataSource.paginator = this.paginator;
      }))
    .subscribe(data => {
      for (const thisGeg of (data as Inschr[])) {
        this.TempData.push(thisGeg);
      }
      console.log( this.TempData);
  });
  }

}
