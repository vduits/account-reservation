import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';
import { Role } from 'src/app/models/Role';
import { Observable, of, Subscriber } from 'rxjs';
import { finalize, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userEndpoint: string = 'user';
  private tokenEndpoint: string = 'token';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private arcUser: User; 
  @Output() private obsUser: EventEmitter<User> = new EventEmitter<User>(); 
  constructor(private http: HttpClient) { }


  getUser(): User{
    return this.arcUser;
  }

  getObsUser(): EventEmitter<User>{
    return this.obsUser;
  }

  getUserId(): string{
    return this.arcUser.uuid;
  }

  checkRole(): Role{
    return this.arcUser.role;
  }


  private createUser(userGmail: string){
    let uri = `${environment.api}${this.userEndpoint}`;
    let user: User = {
      gmail: userGmail,
      role: Role.Registered
    }
    this.http.post<User>(uri,user,this.httpOptions).subscribe(
      user => {
        if(user.uuid != null){
          this.arcUser = user;
          this.obsUser.emit(this.arcUser);
        }
      }
    );   
  }


  sendCodeToBackEnd(code: string, user: User){
    const body ={
      'token': code.toString()
    }
    let uri = `${environment.api}${this.userEndpoint}/${user.uuid}/${this.tokenEndpoint}`;
    this.http.post<User>(uri,body,this.httpOptions).subscribe(
      user => {
        this.arcUser = user;
        this.obsUser.emit(this.arcUser);
      },
      error =>{
        console.log(error);
      }
    );
  } 


  retrieveOrCreateUser(gmail: string){
    let uri = `${environment.api}${this.userEndpoint}/${gmail}`;
    this.http.get<User>(uri,this.httpOptions).subscribe(
      user => {
        if(user != null){
          if(user.uuid != null){
            this.arcUser = user;
            this.obsUser.emit(this.arcUser);
          }else{
            this.createUser(gmail);
          }
        }
      }
    );
  }

}
