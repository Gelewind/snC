import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AanwezigComponent } from './component/aanwezig/aanwezig.component'
import { UploadComponent } from './component/upload/upload.component'
const routes: Routes = [
  {path:'upload', component:UploadComponent},
  {path:'aanwezig', component: AanwezigComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
