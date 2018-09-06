import { Component } from '@angular/core';
import { StationService } from '../services/station';
import { Station } from '../models/station';

@Component({
  selector: 'app-stations-page',
  templateUrl: './station-page.component.html',
  styleUrls: ['./station-page.component.css']
})
export class StationPageComponent {
  message: string;
  city: string;
  stations: Station[] = [];
  loading: boolean = false;

  constructor(private stationService: StationService) {}

  searchStation(e) {
    this.message = '';
    this.loading = true;
    this.stations = [];
    this.city = e;
    this.stationService.getStations(e).subscribe(
      data => {
        this.loading = false;
        this.stations = data;
      },
      err => {
        this.loading = false;
        this.message = 'No Record Found';
      }
    );
  }
}
