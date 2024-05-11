/*
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AxiosService } from '../../../../axios.service';



@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})

export class ConnexionComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  loginstring ="";
  password:string ="";

  constructor(private axiosService: AxiosService) { }


  onSubmitLogin():void{
    this.onSubmitLoginEvent.emit({"login":this.login,"password":this.password});
  }
  






  async onLogin(input: any): Promise<void> {
    try {
      const response = await this.axiosService.request(
        "POST",
        "/login",
        {
          login: input.login,
          password: input.password
        }
      );
      console.log(response); // Faites quelque chose avec la réponse
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
}
*/

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AxiosService } from '../../../../axios.service';



@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})

export class ConnexionComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();

  login:string ="";
  password:string ="";

  onSubmitLogin():void{
    this.onSubmitLoginEvent.emit({"login":this.login,"password":this.password});
  }
  
/*
  constructor{private axiosService: AxiosService}{}

  onLogin(input: any) void{
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }


    );
  }
*/
}