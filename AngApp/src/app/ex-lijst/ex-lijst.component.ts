import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetdataService } from '../../getdata.service';
import { Exrec } from '../Interfaces/exrec';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-ex-lijst',
  templateUrl: './ex-lijst.component.html',
  styleUrls: ['./ex-lijst.component.css']
})
export class ExLijstComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedCols2: string[] = ['licentie', 'voornaam', 'achternaam', 'aantal', 'Trainingen', 'omschrijving', 'Behaaldop', 'leeftijd']; // , 'geboorteDatum', 'GraadID', 'Trainingen', 'Maanden'];
  dataSource: MatTableDataSource<Exrec> ;
  TempData: Exrec[] = [];

  constructor(private api: GetdataService) {
   }

   @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngOnInit(): void {
    this.api.GetExLijst ()
    .pipe(
      finalize(() => {
        this.dataSource = new MatTableDataSource<Exrec>(this.TempData) ;
        this.dataSource.paginator = this.paginator;
      }))
    .subscribe(data => {
      for (const thisGeg of (data as Exrec[])) {
        this.TempData.push(thisGeg);
    }
  });
  }
}
