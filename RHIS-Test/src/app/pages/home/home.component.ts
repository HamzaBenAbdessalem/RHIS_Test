import { Component } from '@angular/core';
import {DashboardCardComponent} from '../../dashboard/dashboard-card/dashboard-card.component';
import {DashboardHeaderCardComponent} from '../../dashboard/dashboard-header-card/dashboard-header-card.component';

@Component({
  selector: 'app-home',
  imports: [DashboardCardComponent,DashboardHeaderCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tabs = [
    { label: 'Infos.personnelles', active: true },
    { label: 'Contrats' },
    { label: 'Qualifications' },
    { label: 'Absences & Congés', badge: 3 },
    { label: 'Indisponibilités' },
    { label: 'Discipline' },
    { label: 'Rapports' },
  ];

  rowsIdentity = [
    { label: 'Nom', value: 'Lydia',   isHovered: false, isClicked: false},
    { label: 'Prénom', value: 'Baurer',   isHovered: false, isClicked: false},
    { label: 'Date de naissnace', value: '27/12/1997',   isHovered: false, isClicked: false},
    { label: 'Ville de naissnace', value: 'Paris',   isHovered: false, isClicked: false},
    { label: 'Code postale de naissnace', value: '2009',   isHovered: false, isClicked: false},
    { label: 'Pays de naissnace', value: 'France',  isHovered: false, isClicked: false },
    { label: 'Sexe', value: 'Homme',   isHovered: false, isClicked: false},
    { label: 'Situation de handicap', value: 'Non',   isHovered: false, isClicked: false},
  ];
  rowsCoo = [
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',   isHovered: false, isClicked: false},
    { label: 'Nom', value: 'Lydia',   isHovered: false, isClicked: false},
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
  ];
  rowsDip = [
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',   isHovered: false, isClicked: false},
    { label: 'Nom', value: 'Lydia',   isHovered: false, isClicked: false},
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
  ];
  rowsMat = [
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
  ];
  rowsAut = [
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
    { label: 'Nom', value: 'Lydia',  isHovered: false, isClicked: false },
  ];
}
