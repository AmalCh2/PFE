import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core'; // 1. Fix import
import { navbarData } from "./navbarData";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SublevelMenuComponent } from './sublevel-menu.component';
import { INavbarData } from './helper';




interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,SublevelMenuComponent],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'] 
})
export class SideNavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth: number = 0; 
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
      this.screenWidth=window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  handleClick(item: INavbarData): void {
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded=false;
        }
      }
    }
    item.expanded =!item.expanded;
  }
}
