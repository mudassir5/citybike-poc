import { Component } from '@angular/core';
import { ParkingService } from '../services/parking';
import { Parking } from '../models/parking';

@Component({
  selector: 'app-parking-page',
  templateUrl: './parking-page.component.html',
  styleUrls: ['./parking-page.component.css']
})
export class ParkingPageComponent {
  parkings: Parking[] = [];
  loading: boolean = false;
  message: string;
  city: string;

  constructor(private stationService: ParkingService) {}

  searchStation(e: string) {
    this.city = e;
    this.message = '';
    this.loading = true;
    this.parkings = [];

    this.stationService.getParkings(e).subscribe(
      data => {
        this.loading = false;
        this.parkings = data;
      },
      err => {
        this.loading = false;
        this.message = 'No Record Found';
      }
    );
  }
}
