import { Component, OnInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { DiscordService } from '../services/discord/discord.service';
import { UserService } from '../services/api/user/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-account-permission-request',
  templateUrl: './account-permission-request.component.html',
  styleUrls: ['./account-permission-request.component.css']
})
export class AccountPermissionRequestComponent implements OnInit, AfterContentInit {

  private reservationForm = new FormGroup({
    gmail: new FormControl('', Validators.required),
    discord: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthenticationService,
    private discordService: DiscordService,
    private userService: UserService) {

  }

  ngAfterContentInit(){
    let guser: User = this.userService.getUser();
    if(guser != null){
      this.fillInFields(guser)
    }else{
      this.userService.getObsUser().subscribe(
        user => {
          this.fillInFields(user);
        }
      )
    }
  }
  
  fillInFields(user: User){
    let gval = this.reservationForm.get('gmail');
    let dval = this.reservationForm.get('discord');
    if (user != null) {
      if (gval.get != null && user.gmail != null) {
        gval.setValue(user.gmail);
      }
      if (dval.get != null && user.discordId != null) {
        dval.setValue(user.discordId);
      }
    }
  }

  ngOnInit() {
  }

  onSubmit() {
  }

}
