import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/header.component';
import { SearchComponent } from './core/search-box.component';
import { StationListComponent } from './stations/components';
import { StationPageComponent } from './stations/containers';
import { ParkingsListComponent } from './parkings/components';
import { ParkingPageComponent } from './parkings/containers';
const COMPONENTS = [
  AppHeaderComponent,
  AppComponent,
  SearchComponent,
  StationListComponent,
  StationPageComponent,
  ParkingsListComponent,
  ParkingPageComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
