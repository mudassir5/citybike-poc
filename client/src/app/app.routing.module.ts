import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StationPageComponent } from './stations/containers';
import { ParkingPageComponent } from './parkings/containers';

const routes: Routes = [
  { path: '', redirectTo: '/stations', pathMatch: 'full' },
  { path: 'stations', component: StationPageComponent },
  { path: 'parkings', component: ParkingPageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
