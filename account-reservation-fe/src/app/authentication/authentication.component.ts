import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DiscordService } from '../services/discord/discord.service';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/api/user/user.service';
import { Role } from '../models/Role';
import { User } from '../models/User';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, AfterContentInit {
  private code: string;
  private message: string;
  private message_description: string;

  confirmationForm = new FormGroup({
    discordId: new FormControl('')
  })

  constructor(private activatedRoute: ActivatedRoute,
    private discordService: DiscordService,
    private authService: AuthenticationService,
    private userService: UserService
    ) {
    this.reportWhatHappened();
  }

  private reportWhatHappened() {
    console.log('been here');
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has('error')) {
        this.message = params.get('error');
        this.message_description = params.get('error_description')
      } else if (params.has('code')) {
        this.code = params.get('code');        
      }
    });
  }

  private checkUserThenUpdateUser(){
    if(this.code != null){
      this.userService.getObsUser().subscribe(
        (user: User) => {
          if(user.discordId === null){
            this.userService.sendCodeToBackEnd(this.code, user);
            this.code = null;
          }
        }
      )
    }
  }

  ngAfterContentInit(){
    this.checkUserThenUpdateUser();
  }

  ngOnInit() {
  }

 }
