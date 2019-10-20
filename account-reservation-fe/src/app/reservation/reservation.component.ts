import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/api/reservation/reservation.service';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {

  reservationForm = new FormGroup({
    starttime: new FormControl('', Validators.required),
    endtime: new FormControl('', Validators.required),
    motivatie: new FormControl('', Validators.required),
    date: new FormControl(Validators.required)
  });
  
  constructor(
    private reservationService: ReservationService,
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
  }

  reservationRequestNow() {
    console.log("pressed");
    this.reservationService.createReservationToday().subscribe();
  }

}
