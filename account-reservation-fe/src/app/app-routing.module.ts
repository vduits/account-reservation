import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: 'Login'}  },
  { path: 'reservation', component: ReservationComponent, data: {title: 'Reservations'}  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
