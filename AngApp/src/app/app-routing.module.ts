import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AanwezigComponent } from './aanwezig/aanwezig.component';
import { HomeComponent } from './home/home.component';
import { LidComponent } from './lid/lid.component';
import { LedenComponent} from './leden/leden.component';
import {DagaanwezigComponent} from './dagaanwezig/dagaanwezig.component';

const routes: Routes = [{ path: '', component: AanwezigComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'Aanwezig', component: AanwezigComponent },
{ path: 'Lid', component: LidComponent },
{ path: 'Filter lid', component: LedenComponent },
{ path: 'dAan', component: DagaanwezigComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
