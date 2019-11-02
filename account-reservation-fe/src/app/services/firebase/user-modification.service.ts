import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../../models/User';
import { Role } from 'src/app/models/Role';

@Injectable({
  providedIn: 'root'
})
export class UserModificationService {

  private userCollection: AngularFirestoreCollection;


  constructor( private fireStore: AngularFirestore) { 
    this.userCollection = fireStore.collection<User>('users');
  }

  getStore(): AngularFirestore {
    return this.fireStore;
  }

  createRegisteredUser(fbUser: firebase.User){
    this.userCollection.doc(fbUser.uid).set({
      gmail: fbUser.email,
      role: Role.Registered
    })
  }

}
