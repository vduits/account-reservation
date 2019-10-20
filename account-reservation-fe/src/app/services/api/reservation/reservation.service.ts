import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Reservation } from 'src/app/models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationEndpoint: String = 'reservation';


  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };    
    console.log(reservation);
    let stuff = `${environment.api}${this.reservationEndpoint}`;
    this.http.post(stuff,reservation,httpOptions).subscribe(
      data => {
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

} 