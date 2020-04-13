import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GegAanwezig } from './app/Interfaces/geg-aanwezig';
import { GegAanwData } from './app/Interfaces/geg-aanw-data';
import { Exrec } from './app/Interfaces/exrec';
import { LoginData } from './app/Interfaces/login-data';
import { Inschr } from './app/Interfaces/inschr';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {
//  private localUrl = 'assets/data/smartphone.json';
  private myVKFLeden = 'http://www.karatesintniklaas.be/my-app/Api/VKFLeden.php';
  private myCal = 'http://www.karatesintniklaas.be/my-app/Api/LidAgenda.php';
  private AanWData = 'http://www.karatesintniklaas.be/my-app/Api/AanwezigData.php';
  private Exlijst = 'http://www.karatesintniklaas.be/my-app/Api/ExamenLijst.php';
  private authLink = 'http://www.karatesintniklaas.be/my-app/Api/auth.php';
  private Inschlijst = 'http://www.karatesintniklaas.be/my-app/Api/Inschr.php';
  constructor( private httpClient: HttpClient) { }
  private loginData: LoginData = { lic: 0, admin: false, auth: false};

  public GetLeden(): Observable<any> {
    return this.httpClient.get<any[]>(this.myVKFLeden);
    // ShareRepla()
  }
  public GetAanwezig( start: Date): Observable<any> {
    this.loginData = JSON.parse(localStorage.getItem('currentUser') ?? '');
    // tslint:disable-next-line:max-line-length
    const opts = { params: new HttpParams({fromString: 'l=' + this.loginData.lic + '&d=' + start.getFullYear() + '-' + start.getMonth() + 1 + '-01'  }) };
    return this.httpClient.get<GegAanwezig[]>(this.myCal, opts );
  }
  public GetDagAanw( start: Date ): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const opts = { params: new HttpParams({fromString: '&d=' + start.getFullYear() + '-' + start.getMonth() + 1 + '-' + start.getDate() }) };
    return this.httpClient.get<GegAanwData[]>(this.AanWData, opts );
  }
  public GetExLijst(): Observable<any> {
    return this.httpClient.get<Exrec[]>(this.Exlijst);
  }
  public authen(lic: number, pw: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams().set('l',  lic.toString());
    return this.httpClient.post(this.authLink, body, { headers });
  }
  public login(loginData: LoginData) {
    this.loginData = loginData;
    localStorage.setItem('currentUser', JSON.stringify(loginData));
  }
  public isAdmin(): boolean {
    this.loginData = JSON.parse(localStorage.getItem('currentUser') ?? '');
    return this.loginData.admin;
  }
  public isAuth(): boolean {
    this.loginData = JSON.parse(localStorage.getItem('currentUser') ?? '');
    return this.loginData.auth;
  }
  public getLic(): number {
    this.loginData = JSON.parse(localStorage.getItem('currentUser' ) ?? '');
    return this.loginData.lic;
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.loginData = { lic: 0, admin: false, auth: false};
  }
  public getInschr(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Inschr[]>(this.Inschlijst );
  }
}
