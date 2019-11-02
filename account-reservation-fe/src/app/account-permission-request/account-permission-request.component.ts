import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-account-permission-request',
  templateUrl: './account-permission-request.component.html',
  styleUrls: ['./account-permission-request.component.css']
})
export class AccountPermissionRequestComponent implements OnInit {

  reservationForm = new FormGroup({
    gmail: new FormControl('', Validators.required),
    discord: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

}
