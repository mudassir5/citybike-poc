import { Component, Input } from '@angular/core';
import { Parking } from '../models/parking';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parkings-list.component.html',
  styleUrls: ['./parkings-list.component.css']
})
export class ParkingsListComponent {
  @Input()
  parkings: Parking[];
}
