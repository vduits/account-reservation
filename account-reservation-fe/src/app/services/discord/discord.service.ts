import { Injectable } from '@angular/core';
import { Scope } from './scope';
import { discord } from '../../../environments/discord';
import { environment } from '../../../environments/environment';
import { QueryParam } from './queryparam';
import { ResponseType } from './responsetype';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  private discordApi: string = 'https://discordapp.com/api/';
  private oautherize : string = 'oauth2/authorize';
  private equals : string = '=';
  private query : string = '\?';
  private and : string = '&';

  constructor() { }

  buildAuthRequest(): string {
    let oauthRequest = `${this.discordApi}${this.oautherize}
    ${this.query}${QueryParam.client_id}${this.equals}${discord.client_id}
    ${this.and}${QueryParam.redirect_uri}${this.equals}${discord.redirect_uri}
    ${this.and}${QueryParam.response_type}${this.equals}${ResponseType.code}
    ${this.and}${QueryParam.scope}${this.equals}${Scope.identify}
    `;   
    return oauthRequest.replace(/ /g,'');
  }

  sendCodeToBackEnd(code: string){
    
  }

  // todo instead we want to push this towards as user request to enhance its profile with a discord one.

  // createReservation(reservation: Reservation) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //     })
  //   };    
  //   console.log(reservation);
  //   let uri = `${environment.api}${this.reservationEndpoint}`;
  //   this.http.post(uri,reservation,httpOptions).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error =>{
  //       console.log(error);
  //     }
  //   );
  // }

}
