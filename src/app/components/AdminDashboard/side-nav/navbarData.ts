import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routerLink: '/menu_general',
        icon: 'fal fa-home',
        label: 'Menu Général'
    },

    {
        routerLink: '/client',
        icon: 'fal fa-user',
        label: 'Client',
        items: [
            {
                routerLink: '/ajouter_client',
                label: 'Ajouter un client'
            },

            {
                routerLink: '/rechercher_client',
                label: 'Rechercher un client'
            },
        ]
    },

    {
        routerLink: '/bateau',
        icon: 'fal fa-ship',
        label: 'Bateau',
        items: [
            {
                routerLink: '/ajouter_bateau',
                label: 'Ajouter un bateau'
            },

            {
                routerLink: '/rechercher_bateau',
                label: 'Rechercher un bateau'
            },
        ]
    },

    {
        routerLink: '/réservation',
        icon: 'fal fa-file-invoice',
        label: 'Réservation',
        items: [
            {
                routerLink: '/ajouter_réservation',
                label: 'Ajouter une réservation'
            },

            {
                routerLink: '/rechercher_réservation',
                label: 'Rechercher une réservation'
            },

            {
                routerLink: '/archives_réservations',
                label: 'Archive des réservations'
            },

            {
                routerLink: '/etat_réservation_arrivées',
                label: 'Etat des réservations (Arrivées)'
            },
        ]
    },

    {
        routerLink: '/plan_d_eau',
        icon: 'fal fa-water',
        label: 'Plan d"eau'
    },

    {
        routerLink: '/séjour',
        icon: 'fal  fa-anchor',
        label: 'Séjour',
        items: [
            {
                routerLink: '/ajouter_séjour',
                label: 'Ajouter un séjour'
            },

            {
                routerLink: '/rechercher_séjour',
                label: 'Rechercher un séjour'
            },

            {
                routerLink: '/archives_séjours',
                label: 'Archive des séjours'
            },

            {
                routerLink: '/annuler_séjour',
                label: 'Annuler un séjour'
            },
        ]
    },

    {
        routerLink: '/facturation',
        icon: 'fa fa-credit-card',
        label: 'Facturation'
    },

    {
        routerLink: '/amodiation',
        icon: 'fal fa-map-marker-alt',
        label: 'Amodiation'
    },

    {
        routerLink: '/admin',
        icon: 'fal fa-user-shield',
        label: 'Admin'
    },
];
