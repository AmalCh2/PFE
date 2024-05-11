import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-check',
  standalone: true,
  imports: [],
  templateUrl: './profile-check.component.html',
  styleUrl: './profile-check.component.css'
})
export class ProfileCheckComponent {
  section ={
    IconBlocks:[
      {IconShape:"fa-solid fa-user-secret" ,IconTitle:"Admin"},
      {IconShape:"fa-sharp fa-solid fa-user-tie" ,IconTitle:"Directeur"},
      {IconShape:"fa-solid fa-chalkboard-user" ,IconTitle:"Receptioniste"},
      {IconShape:"fa-regular fa-anchor-lock" ,IconTitle:"Commandant du port"},    
    ],
    IconLink:"/connexion"
  };

}
