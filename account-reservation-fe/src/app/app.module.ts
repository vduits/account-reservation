import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AccountPermissionRequestComponent } from './account-permission-request/account-permission-request.component';

import { google } from '../environments/google';
import { AuthenticationComponent } from './authentication/authentication.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google.client_id)
  }
]);

export function provideGoogleConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservationComponent,
    MenuComponent,
    AccountPermissionRequestComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [ 
    {provide: AuthServiceConfig, useFactory: provideGoogleConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
