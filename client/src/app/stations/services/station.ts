import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const API_URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class StationService {
  constructor(private http: HttpClient) {}

  getStations(city: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('city', `${city}`);
    return this.http.get<any>(`${API_URL}stations`, { params }).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response | any) {
    console.error(error);
    return throwError(error);
  }
}
