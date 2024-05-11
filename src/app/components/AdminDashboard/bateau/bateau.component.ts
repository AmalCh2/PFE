import { Component, NgModule,OnInit, Input } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { SideNavToggle } from './SideNavToggle.interface';
import { AxiosService } from '../../../axios.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-bateau',
  standalone: true,
  imports: [CommonModule,BodyComponent,SideNavComponent,AdminDashboardComponent,RouterOutlet],
  templateUrl: './bateau.component.html',
  styleUrl: './bateau.component.css'
})
export class BateauComponent {










  





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

