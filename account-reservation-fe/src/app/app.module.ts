import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { environment } from '../environments/firebase';
import { ReservationService } from './services/api/reservation/reservation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
