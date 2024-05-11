import { Routes } from '@angular/router';
import { AproposPageComponent } from './components/Home/apropos-page/apropos-page.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
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
import { CalendrierComponent } from './components/AdminDashboard/menu-general/calendrier/calendrier.component';
import { AjouterClientComponent } from './components/AdminDashboard/client/ajouter-client/ajouter-client.component';
import { AjouterBateauComponent } from './components/AdminDashboard/bateau/ajouter-bateau/ajouter-bateau.component';
import { RechercherBateauComponent } from './components/AdminDashboard/bateau/rechercher-bateau/rechercher-bateau.component';
import { FicheBateauChoisitComponent } from './components/AdminDashboard/bateau/fiche-bateau-choisit/fiche-bateau-choisit.component';
import { RechercherClientComponent } from './components/AdminDashboard/client/rechercher-client/rechercher-client.component';
import { FicheClientComponent } from './components/AdminDashboard/client/fiche-client/fiche-client.component';
import { AjouterReservationComponent } from './components/AdminDashboard/reservation/ajouter-reservation/ajouter-reservation.component';
import { RechercherReservationComponent } from './components/AdminDashboard/reservation/rechercher-reservation/rechercher-reservation.component';
import { ArchiveReservationComponent } from './components/AdminDashboard/reservation/archive-reservation/archive-reservation.component';
import { FicheReservationComponent } from './components/AdminDashboard/reservation/fiche-reservation/fiche-reservation.component';
import { FicheClientModifierComponent } from './components/AdminDashboard/client/fiche-client-modifier/fiche-client-modifier.component';
import { FicheBateauModifierComponent } from './components/AdminDashboard/bateau/fiche-bateau-modifier/fiche-bateau-modifier.component';
import { FicheReservationModifierComponent } from './components/AdminDashboard/reservation/fiche-reservation-modifier/fiche-reservation-modifier.component';
import { EtatReservationArriveesComponent } from './components/AdminDashboard/reservation/etat-reservation-arrivees/etat-reservation-arrivees.component';
import { RechercherSejourComponent } from './components/AdminDashboard/sejour/rechercher-sejour/rechercher-sejour.component';
import { AjouterSejourComponent } from './components/AdminDashboard/sejour/ajouter-sejour/ajouter-sejour.component';
import { FicheSejourComponent } from './components/AdminDashboard/sejour/fiche-sejour/fiche-sejour.component';
import { FicheSejourModifierComponent } from './components/AdminDashboard/sejour/fiche-sejour-modifier/fiche-sejour-modifier.component';
import { ArchiveSejourComponent } from './components/AdminDashboard/sejour/archive-sejour/archive-sejour.component';
import { AnnulerSejourComponent } from './components/AdminDashboard/sejour/annuler-sejour/annuler-sejour.component';
export const routes: Routes = [
    { path: '', redirectTo: '/Page_d_accueil', pathMatch: 'full' },
    {title:"Marina Yasmine Hammamet | Accueil",path:'Page_d_accueil', component: HomePageComponent},
    {title:"Marina Yasmine Hammamet | A Propos",path:'A_Propos', component: AproposPageComponent},
    {title:"Marina Yasmine Hammamet | Profile",path:'Profile', component: ProfileCheckComponent},
    {title:"Marina Yasmine Hammamet | Se connecter",path:'Se_connecter', component: ConnexionComponent},

    {title:"calendrier",path:'calendrier', component: CalendrierComponent},


    {title:"Marina Yasmine Hammamet | Admin Dashboard",path:'admin_dashboard', component: MenuGeneralComponent},
    {title:"Marina Yasmine Hammamet | Menu Général",path:'menu_general', component: MenuGeneralComponent},

    {title:"Marina Yasmine Hammamet | Client",path:'client', component: ClientComponent},
    {title:"Marina Yasmine Hammamet | Ajouter un client",path:'ajouter_client', component: AjouterClientComponent},
    {title:"Marina Yasmine Hammamet | rechercher un bateau",path:'rechercher_client', component: RechercherClientComponent},
    {title:"Marina Yasmine Hammamet | Fiche du client",path:'fiche_client', component: FicheClientComponent},
    {title:"Marina Yasmine Hammamet | Modifier une fiche du client",path:'modifier_fiche_client', component: FicheClientModifierComponent},

    {title:"Marina Yasmine Hammamet | Bateau",path:'bateau', component: BateauComponent},
    {title:"Marina Yasmine Hammamet | Ajouter un bateau",path:'ajouter_bateau', component: AjouterBateauComponent},
    {title:"Marina Yasmine Hammamet | Rechercher un bateau",path:'rechercher_bateau', component: RechercherBateauComponent},
    {title:"Marina Yasmine Hammamet | Imrimer fiche du bateau",path:'fiche_bateau', component: FicheBateauChoisitComponent},
    {title:"Marina Yasmine Hammamet | Modifier une fiche du bateau",path:'modifier_fiche_bateau', component: FicheBateauModifierComponent},




    {title:"Marina Yasmine Hammamet | Réservation",path:'réservation', component: ReservationComponent},
    {title:"Marina Yasmine Hammamet | Ajouter une réservation",path:'ajouter_réservation', component: AjouterReservationComponent},
    {title:"Marina Yasmine Hammamet | Rechercher une réservation",path:'rechercher_réservation', component: RechercherReservationComponent},
    {title:"Marina Yasmine Hammamet | Imprimer fiche d'une réservation",path:'fiche_réservation', component: FicheReservationComponent},
    {title:"Marina Yasmine Hammamet | Modifier une fiche d'une réservation",path:'modifier_fiche_réservation', component: FicheReservationModifierComponent},
    {title:"Marina Yasmine Hammamet | Etat des réservations (Arrivées)",path:'etat_réservation_arrivées', component: EtatReservationArriveesComponent},
    {title:"Marina Yasmine Hammamet | Archive des réservations",path:'archives_réservations', component: ArchiveReservationComponent},






    {title:"Marina Yasmine Hammamet | Plan d'eau",path:'plan_d_eau', component: PlanDEauComponent},




    {title:"Marina Yasmine Hammamet | Séjour",path:'séjour', component: SejourComponent},
    {title:"Marina Yasmine Hammamet | Rechercher un séjour",path:'rechercher_séjour', component: RechercherSejourComponent},
    {title:"Marina Yasmine Hammamet | Ajouter un séjour",path:'ajouter_séjour', component: AjouterSejourComponent},
    {title:"Marina Yasmine Hammamet | Imprimer fiche du séjou",path:'fiche_séjour', component: FicheSejourComponent},
    {title:"Marina Yasmine Hammamet | Modifier une fiche du séjour",path:'modifier_fiche_séjour', component: FicheSejourModifierComponent},
    {title:"Marina Yasmine Hammamet | Archive des séjours",path:'archives_séjours', component: ArchiveSejourComponent},
    {title:"Marina Yasmine Hammamet | Annuler un séjour",path:'annuler_séjour', component: AnnulerSejourComponent},






    {title:"Marina Yasmine Hammamet | Facturation",path:'facturation', component: FacturationComponent},
    {title:"Marina Yasmine Hammamet | Amodiation",path:'amodiation', component: AmodiationComponent},
    {title:"Marina Yasmine Hammamet | Admin",path:'admin', component: AdminComponent},


];
