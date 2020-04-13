import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';
// import { MenuItem } from './Menu/menuitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  objectKeys = Object.keys;
//  title = 'AngApp';
isAdmin = false;
isAuth = false;

constructor(private getdataService: GetdataService) {
  this.isAdmin = getdataService.isAdmin();
  this.isAuth = getdataService.isAuth();
}
  }

