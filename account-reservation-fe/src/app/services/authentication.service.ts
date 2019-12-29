import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserService } from './api/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn: boolean;
  private gUser: SocialUser

  constructor(
    private userService: UserService,
    private authService: AuthService
    ) {
      this.authService.authState.subscribe((user) => {
        this.gUser = user;
        this.loggedIn = (user != null);
        if(this.loggedIn){
          this.createRegisteredUserIfNotExists(this.gUser.email);
        }
      });
  }

  createRegisteredUserIfNotExists(gmail: string){
    this.userService.retrieveOrCreateUser(gmail);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  
}
