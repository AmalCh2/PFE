import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-apropos-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './apropos-page.component.html',
  styleUrl: './apropos-page.component.css'
})
export class AproposPageComponent {

}
