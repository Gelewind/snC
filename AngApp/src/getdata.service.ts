import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lid } from './app/Classes/lid';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private localUrl = 'assets/data/smartphone.json';
  private REST_API_SERVER = 'http://localhost:3000/Leden.php';

  constructor(private httpClient: HttpClient) { }

  public GetLeden(): Observable<any> {
    return this.httpClient.get<Lid[]>(this.REST_API_SERVER);
  }
}
