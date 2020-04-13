import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AanwezigComponent } from './aanwezig/aanwezig.component';
import { HomeComponent } from './home/home.component';
import { LidComponent } from './lid/lid.component';
import { LedenComponent} from './leden/leden.component';
import { DagaanwezigComponent } from './dagaanwezig/dagaanwezig.component';
import { InschrComponent } from './inschr/inschr.component';
import { ExLijstComponent } from './ex-lijst/ex-lijst.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard} from '../admin.guard';


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent,
canActivate: [!AdminGuard] },
{ path: 'Home', component: HomeComponent,
  canLoad: [ AdminGuard ],
  canActivateChild: [ AdminGuard ],
  children: [
    { path: 'ZetAanw', component: DagaanwezigComponent},
    { path: 'ExLijst', component: ExLijstComponent },
    { path: 'Filter lid', component: LedenComponent },
    { path: 'Insch', component: InschrComponent } ]},
  { path: 'Aanwezig',
    component: AanwezigComponent,
      canActivate: [AdminGuard] },
  { path: 'Aanwezig/:dag',
  component: AanwezigComponent,
    canActivate: [AdminGuard] },
{ path: 'lid',
  component: LidComponent,
  canActivate: [AdminGuard],
  data: { animation: 'hero' } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
