import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/api/reservation/reservation.service';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Reservation } from '../models/Reservation';
import { UserService } from '../services/api/user/user.service';

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
    motivation: new FormControl('', Validators.required),
    date: new FormControl(Validators.required)
  });
  
  constructor(
    private reservationService: ReservationService,
    private userService: UserService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    let dateFrom = new Date(this.reservationForm.value.date +'T'+ this.reservationForm.value.starttime);
    let dateUntil = new Date(this.reservationForm.value.date +'T'+ this.reservationForm.value.endtime);
    let reservation: Reservation = {
      user_id: this.userService.getUserId(),
      group_name: 'unsupported',
      account_count: 0,
      start_date: dateFrom,
      end_date: dateUntil,
      request_info: this.reservationForm.value.motivation,
      status: 'requested'
    }
    this.reservationService.createReservation(reservation);
  }

}
