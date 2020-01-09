import { Injectable } from '@angular/core';
import { Scope } from './scope';
import { discord } from '../../../environments/discord';
import { environment } from '../../../environments/environment';
import { QueryParam } from './queryparam';
import { ResponseType } from './responsetype';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../api/user/user.service';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  private discordApi: string = 'https://discordapp.com/api/';
  private oautherize : string = 'oauth2/authorize';
  private equals : string = '=';
  private query : string = '\?';
  private and : string = '&';

  constructor(private http: HttpClient,
    private userService: UserService) { }

  buildAuthRequest(): string {
    let oauthRequest = `${this.discordApi}${this.oautherize}
    ${this.query}${QueryParam.client_id}${this.equals}${discord.client_id}
    ${this.and}${QueryParam.redirect_uri}${this.equals}${discord.redirect_uri}
    ${this.and}${QueryParam.response_type}${this.equals}${ResponseType.code}
    ${this.and}${QueryParam.scope}${this.equals}${Scope.identify}
    `;   
    return oauthRequest.replace(/ /g,'');
  }




}
