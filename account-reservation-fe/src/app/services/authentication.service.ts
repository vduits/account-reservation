import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs';

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
    private afStore: AngularFirestore
    ) {
    this.firebaseAuth.authState.subscribe(
      (auth) => {
        this.authState = auth;
        if (auth == null) {
          this.loggedIn = false;
          this.displayName = 'Not logged in';
        } else {
          this.loggedIn = true;
          this.displayName = auth.displayName;
          this.fbUser = auth;
          this.checkPermissies(this.fbUser.uid);
        }
      }
    );
  }

  async checkPermissies(uid: string){
    this.userDoc = this.afStore.doc<User>(`users/${uid}`);
    this.obUser = this.userDoc.valueChanges();
    this.obUser.subscribe(queriedUser =>{
      if(queriedUser == null){
        console.log(' cannot find user, create one instead?');
      }else{
        this.user = queriedUser;
        console.log(queriedUser);
      }
    })
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
    return this.authState !== null;
  }
}
