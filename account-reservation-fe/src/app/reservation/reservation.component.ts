import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/api/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {
  
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  reservationRequestNow() {
    console.log("pressed");
    this.reservationService.createReservationToday().subscribe();
  }

}
