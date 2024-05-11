import { Component, OnInit } from '@angular/core';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AproposPageComponent } from './components/Home/apropos-page/apropos-page.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { HomePageHeaderComponent } from './components/Home/home-page-header/home-page-header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProfileCheckComponent } from './components/Home/LoginPage/profile-check/profile-check.component';
import { ConnexionComponent } from './components/Home/LoginPage/connexion/connexion.component';

import { AdminComponent } from './components/AdminDashboard/admin/admin.component';
import { AmodiationComponent } from './components/AdminDashboard/amodiation/amodiation.component';
import { BateauComponent } from './components/AdminDashboard/bateau/bateau.component';
import { BodyComponent } from './components/AdminDashboard/body/body.component';
import { ClientComponent } from './components/AdminDashboard/client/client.component';
import { FacturationComponent } from './components/AdminDashboard/facturation/facturation.component';
import { MenuGeneralComponent } from './components/AdminDashboard/menu-general/menu-general.component';
import { PlanDEauComponent } from './components/AdminDashboard/plan-d-eau/plan-d-eau.component';
import { ReservationComponent } from './components/AdminDashboard/reservation/reservation.component';
import { SejourComponent } from './components/AdminDashboard/sejour/sejour.component';
import { AdminDashboardComponent } from './components/AdminDashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule ici


/*
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule, RouterModule,CommonModule,RouterOutlet,RouterLinkActive,RouterLink, AproposPageComponent,HomePageComponent,
    ProfileCheckComponent,ConnexionComponent ,HomePageHeaderComponent,SejourComponent,ReservationComponent,
    PlanDEauComponent /*MenuGeneralComponent*//* ,FacturationComponent, /*ClientComponent,*//*BodyComponent,BateauComponent,
    AmodiationComponent,AdminComponent,AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit*//*{
  /*constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/Page_d"accueil']);
  }*//*
  title = 'Frontend';
}
*/


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CalendarModule,
    DatePickerModule,
    TimePickerModule,
    DateRangePickerModule,
    DateTimePickerModule,
    HttpClientModule, // Ajoutez HttpClientModule ici
    RouterModule,
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    AproposPageComponent,
    HomePageComponent,
    ProfileCheckComponent,
    ConnexionComponent,
    HomePageHeaderComponent,
    SejourComponent,
    ReservationComponent,
    PlanDEauComponent,
    FacturationComponent,
    BodyComponent,
    BateauComponent,
    AmodiationComponent,
    AdminComponent,
    AdminDashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
}

