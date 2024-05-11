import { Component, NgModule,OnInit, Input } from '@angular/core';
import { AdminDashboardComponent } from '../../admin-dashboard.component';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../../body/body.component';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../../../axios.service';
import { RouterModule } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-rechercher-bateau',
  standalone: true,
  imports: [CommonModule, BodyComponent, SideNavComponent, AdminDashboardComponent, RouterModule],
  templateUrl: './rechercher-bateau.component.html',
  styleUrl: './rechercher-bateau.component.css'
})
export class RechercherBateauComponent {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  totalPages: number = 3;
  currentPage: number = 1;
  paginationHTML: string = '';

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.generatePagination();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  generatePagination(): void {
    this.paginationHTML = this.createPagination(this.totalPages, this.currentPage);
  }

  createPagination(totalPages: number, page: number): string {
    let liTag: string = '';
    let active: string;
    let beforePage: number = page - 1;
    let afterPage: number = page + 1;

    if (page > 1) {
      liTag += `<li class="btn prev" (click)="changePage(${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }

    if (page > 2) {
      liTag += `<li class="first numb" (click)="changePage(1)"><span>1</span></li>`;
      if (page > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    if (page === totalPages) {
      beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page === 1) {
      afterPage = afterPage + 2;
    } else if (page === 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength === 0) {
        plength = plength + 1;
      }
      if (page === plength) {
        active = "active";
      } else {
        active = "";
      }
      liTag += `<li class="numb ${active}" (click)="changePage(${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" (click)="changePage(${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
      liTag += `<li class="btn next" (click)="changePage(${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }

    return liTag;
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.generatePagination(); // Appel pour régénérer la pagination
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }


  @ViewChild('section') section!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  showModal() {
    this.section.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }

  hideModal() {
    this.section.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  closeOverlay() {
    this.hideModal();
  }

  boatsData: any[] = [
    { 
      nom: 'Bateau 1', 
      proprietaire: 'Propriétaire 1', 
      immatriculation: 'IMM-001', 
      type: 'Type 1', 
      pavillon: 'Pavillon 1', 
      marque: 'Marque 1', 
      adresse: '123 Rue Principale', 
      codePostal: '12345', 
      ville: 'Ville 1', 
      pays: 'Pays 1', 
      longueur: '10m', 
      largeur: '3m', 
      tirantEau: '1.5m', 
      tonnage: '5 tonnes', 
      email: 'bateau1@example.com', 
      autreNom: 'Autre Nom 1'
    },
    { 
      nom: 'Bateau 2', 
      proprietaire: 'Propriétaire 2', 
      immatriculation: 'IMM-002', 
      type: 'Type 2', 
      pavillon: 'Pavillon 2', 
      marque: 'Marque 2', 
      adresse: '456 Rue Elm', 
      codePostal: '54321', 
      ville: 'Ville 2', 
      pays: 'Pays 2', 
      longueur: '15m', 
      largeur: '4m', 
      tirantEau: '2m', 
      tonnage: '8 tonnes', 
      email: 'bateau2@example.com', 
      autreNom: 'Autre Nom 2'
    },
    { 
      nom: 'Bateau 3', 
      proprietaire: 'Propriétaire 3', 
      immatriculation: 'IMM-003', 
      type: 'Type 3', 
      pavillon: 'Pavillon 3', 
      marque: 'Marque 3', 
      adresse: '789 Rue Oak', 
      codePostal: '67890', 
      ville: 'Ville 3', 
      pays: 'Pays 3', 
      longueur: '12m', 
      largeur: '3.5m', 
      tirantEau: '1.8m', 
      tonnage: '6 tonnes', 
      email: 'bateau3@example.com', 
      autreNom: 'Autre Nom 3'
    },
    { 
      nom: 'Bateau 4', 
      proprietaire: 'Propriétaire 4', 
      immatriculation: 'IMM-004', 
      type: 'Type 4', 
      pavillon: 'Pavillon 4', 
      marque: 'Marque 4', 
      adresse: '101 Rue Pine', 
      codePostal: '13579', 
      ville: 'Ville 4', 
      pays: 'Pays 4', 
      longueur: '8m', 
      largeur: '2.5m', 
      tirantEau: '1.2m', 
      tonnage: '4 tonnes', 
      email: 'bateau4@example.com', 
      autreNom: 'Autre Nom 4'
    },
    { 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },
    { 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },
  ];
}
