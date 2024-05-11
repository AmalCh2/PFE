import { Component, OnInit, Input } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { SideNavToggle } from './SideNavToggle.interface';
import { AxiosService } from '../../../axios.service';
import { RouterOutlet } from '@angular/router';
import { CalendrierComponent } from './calendrier/calendrier.component';
@Component({
  selector: 'app-menu-general',
  standalone: true,
  imports: [CommonModule,BodyComponent,SideNavComponent,AdminDashboardComponent,RouterOutlet, CalendrierComponent],
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {






  @Input() screenWidthh= 0;
  @Input() collapsed= false;
  getBodyClass():string{
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }







  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}







 /* monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  currentMonth: number;
  currentYear: number;
  todayShowTime: string = '';

  constructor() {}

  ngOnInit() {
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
    this.generateCalendar(this.currentMonth, this.currentYear);
    setInterval(() => {
      const timer = new Date();
      const option = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      } as Intl.DateTimeFormatOptions;

      const formatedTimer = new Intl.DateTimeFormat('en-US', option).format(timer);
      this.todayShowTime = formatedTimer;
    }, 1000);
  }

  isLeapYear(year: number): boolean {
    return (
      (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)
    );
  }

  getFebDays(year: number): number {
    return this.isLeapYear(year) ? 29 : 28;
  }

  generateCalendar(month: number, year: number): void {
    const days_of_month = [
      31,
      this.getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];

    const calendar_days = document.querySelector('.calendar-days');
    if (calendar_days) {
      calendar_days.innerHTML = '';

      const currentDate = new Date();

      const first_day = new Date(year, month);

      for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        const day = document.createElement('div');

        if (i >= first_day.getDay()) {/*
          day.innerHTML = i - first_day.getDay() + 1;*//*
          day.innerHTML = (i - first_day.getDay() + 1).toString();


          if (
            i - first_day.getDay() + 1 === currentDate.getDate() &&
            year === currentDate.getFullYear() &&
            month === currentDate.getMonth()
          ) {
            day.classList.add('current-date');
          }
        }
        calendar_days.appendChild(day);
      }
    }
  }

  monthPickerClick(): void {
    const month_list = document.querySelector('.month-list');
    if (month_list) {
      month_list.classList.remove('hideonce');
      month_list.classList.remove('hide');
      month_list.classList.add('show');
    }
    const dayTextFormate = document.querySelector('.day-text-formate');
    if (dayTextFormate) {
      dayTextFormate.classList.remove('showtime');
      dayTextFormate.classList.add('hidetime');
    }
    const timeFormate = document.querySelector('.time-formate');
    if (timeFormate) {
      timeFormate.classList.remove('showtime');
      timeFormate.classList.add('hideTime');
    }
    const dateFormate = document.querySelector('.date-formate');
    if (dateFormate) {
      dateFormate.classList.remove('showtime');
      dateFormate.classList.add('hideTime');
    }
  }

  preYearClick(): void {
    this.currentYear--;
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  nextYearClick(): void {
    this.currentYear++;
    this.generateCalendar(this.currentMonth, this.currentYear);
  }*/

