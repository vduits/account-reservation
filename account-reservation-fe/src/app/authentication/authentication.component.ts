import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DiscordService } from '../services/discord/discord.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  private error: string;
  private error_description: string;


  constructor(private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private discordService: DiscordService) {
    this.reportWhatHappened();
  }



  private reportWhatHappened() {
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has('error')) {
        this.error = params.get('error');
        this.error_description = params.get('error_description')
      } else if (params.has('code')) {
        this.discordService.sendCodeToBackEnd(params.get('code'));
      }
    });
  }

  ngOnInit() {
  }

}
