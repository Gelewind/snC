import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LidgegevenFb, FbAddLid, VkfLid } from '../class/lidgegeven';
import { TrainingFb } from '../class/training';
import { TrainingTypeFb} from '../class/training-type';
import { ActieveLidFb } from '../class/actieve-lid';
import { ReservatieFb } from '../class/reservatie';
import { TrainingDatumsFb } from '../class/training-datums'
import { Vkflid } from '../class/vkflid';
import { HttpclientService } from '../service/httpclient.service';


import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
//    'Access-Control-Allow-Origin' : '*',
//    'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
//    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
//    Authorization: 'my-auth-token'
  })
};

@Injectable({  providedIn: 'root'})
export class KarateService {
  constructor(private http: HttpclientService, private httpDirect: HttpClient  ) { } // HttpClient
  getCurrentLid(): Observable<LidgegevenFb> {
    return this.http.get<LidgegevenFb>({url: environment.lidAangemeldURL,  cacheMins: 1200});
  }

  GetTrainType(): Observable<TrainingTypeFb> {
    return this.http.get<TrainingTypeFb>({url: environment.trainingenTypeURL,  cacheMins: 3600} );
  }

  GetTrainingen(): Observable<TrainingFb> {
    return this.http.get<TrainingFb>({url: environment.trainingenURL,  cacheMins: 10});
  }

  GetActiveLeden(): Observable<ActieveLidFb> {
    return this.http.get<ActieveLidFb> ({url: environment.actieveLeden,  cacheMins: 1200});
  }
  GetReservaties(id: number): Observable<ReservatieFb> {
    return this.http.get<ReservatieFb> ({url: environment.reservaties + '?TrainingID=' + id,  cacheMins: 5}); //
  }

  GetGraden(): Observable<any> {
    return this.http.get<any> ({url: environment.graden,  cacheMins: 3600});
  }

  getTrainingDatums() : Observable<TrainingDatumsFb>{
    return this.httpDirect.get<TrainingDatumsFb>(environment.traingDatums);
  }

  getTrainingAanw(datum: Date): Observable<any>{
    return this.httpDirect.get<any>(environment.lidAangemeldURL + "&" + datum)
  }

  /** POST: add a new hero to the database */
  addLid(vkfLid: VkfLid): Observable<FbAddLid> {
    return this.httpDirect.post<FbAddLid>(environment.Lidapi, vkfLid, httpOptions);
  }
  
  storeLidVkf(lid: Vkflid): Observable<FbAddLid>{
    return this.httpDirect.post<FbAddLid>(environment.Lidapi, lid, httpOptions);
  }
}
