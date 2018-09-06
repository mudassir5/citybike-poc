import { Component, Input } from '@angular/core';
import { Station } from '../models/station';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.componet.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationListComponent {
  @Input()
  stations: Station;
}
