import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { GoogleService } from 'src/app/services/google/google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authenticationService: AuthenticationService,
    private googleService: GoogleService
    ) {
  }

  loginToGoogle() {
    this.googleService.signInWithGoogle();
  }

  logoutFromGoogle() {
    this.googleService.signOut();
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit() {
  }  

}
