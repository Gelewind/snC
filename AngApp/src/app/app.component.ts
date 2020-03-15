import { Component } from '@angular/core';
import {MenuItem} from './Menu/menuitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objectKeys = Object.keys;
  title = 'AngApp';
  menuItems: MenuItem[] = new Array(
    {title: 'Aanwezigheden', route: ''},
    {title: 'Home', route: ''},
    {title: 'Gegevens', route: ''}
  );
  // mymenu = [
  //   desc:'main1', Child: ['sub1', 'sub2'],
  //   desc:'main2', Child: ['sub1', 'sub2', 'sub3']
  }

