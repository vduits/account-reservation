import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationEndpoint: String = 'reservation';

  constructor(private http: HttpClient) { }

  createReservationToday() {
    let body = null;
    let stuff = `${environment.api}${this.reservationEndpoint}`;
    environment.api
    return this.http.post(stuff,body);
  }
} 