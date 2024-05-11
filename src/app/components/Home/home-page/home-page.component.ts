import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomePageHeaderComponent } from '../home-page-header/home-page-header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,HomePageHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
