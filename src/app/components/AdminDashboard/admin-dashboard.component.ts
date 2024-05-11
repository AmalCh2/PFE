import { Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { BodyComponent } from './body/body.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AxiosService } from '../../axios.service';
import { OnInit } from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,SideNavComponent/*,MenuGeneralComponent*/,BodyComponent,],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {

  
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth= data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }






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


}
