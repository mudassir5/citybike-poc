import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `<form>
  <div class=row>
  <div class="col-md-8">
    <div class="form-group">
      <input [(ngModel)]="cityName" name="city" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter city">
      <small id="emailHelp" class="form-text text-muted">Use Camel Case for city name e.g Paris, Sorocaba, Melbourne</small>
    </div>
    </div>
    <div class="col-md-4">
    <div class="form-group">
    <button type="button" (click)="searchCity()" class="btn btn-primary">Search</button>
    </div>
    </div>
    </div>
  </form>`,
  styleUrls: ['./header.component.css']
})
export class SearchComponent {
  cityName: string;
  @Output()
  search: EventEmitter<any> = new EventEmitter();

  searchCity() {
    this.search.emit(this.cityName);
  }
}
