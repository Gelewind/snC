import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AanwezigComponent} from './aanwezig/aanwezig.component';
import {HomeComponent} from './home/home.component';
import { LidComponent } from './lid/lid.component';

const routes: Routes = [{ path: '', component: AanwezigComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'Aanwezig', component: AanwezigComponent },
{ path: 'Lid', component: LidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
