import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Role } from '../models/Role';
import {UserModificationService} from './firebase/user-modification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn: boolean;
  private displayName: String;
  private fbUser: firebase.User;
  private userDoc: AngularFirestoreDocument<User>;
  private obUser: Observable<User>;
  private user: User;
  authState: any = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private userMod: UserModificationService
    ) {
    this.firebaseAuth.authState.subscribe(
      (auth) => {
        this.authState = auth;
        if (auth == null) {
          this.loggedIn = false;
          this.displayName = 'Not logged in';
          this.fbUser = null;
          this.obUser = null;
        } else {
          this.loggedIn = true;
          this.displayName = auth.displayName;
          this.fbUser = auth;
          this.checkPermissions(this.fbUser);
        }
      }
    );
  }

  async checkPermissions(fbUser: firebase.User){
    this.userDoc = this.afStore.doc<User>(`users/${fbUser.uid}`);
    this.obUser = this.userDoc.valueChanges();
    this.obUser.subscribe(queriedUser =>{
      if(queriedUser == null){
        if(this.isLoggedIn()){
          this.createRegisteredUserIfNotExists(fbUser);
        }
      }else{
        this.user = queriedUser;
        if(this.user.role === Role.Permitted || this.user.role === Role.Admin){
          console.log('Neat');
        }else if (this.user.role === Role.Registered){
          console.log('not neat, but at least Registered.');
        }
      }
    })
  }

  createRegisteredUserIfNotExists(fbUser: firebase.User){
    this.userMod.createRegisteredUser(fbUser);
  }


  checkRole(): string{
    return this.user.role;
  }

  getUserId(): string{
    return this.fbUser.uid;
  }

  getUser(): User{
    return this.user;
  }

  isLoggedIn(): boolean {
    return this.authState != null;
  }
}
