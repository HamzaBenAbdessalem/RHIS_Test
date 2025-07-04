import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate, keyframes
} from '@angular/animations';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('submenuFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-5px)' })),
      ]),
    ]),
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  isHovered = false;
  openedSubmenu: string | null = null;
  submenuState = 0;
  menu = [
    { icon: 'bi bi-house-door', label: 'Accueil' },
    {
      icon: 'bi bi-people', label: 'Employés', hasChildren: true, submenu: [
        { label: 'Liste des employés' },
        { label: 'Ajouter un employé' },
        { label: 'Archives' },
      ]
    },
    { icon: 'bi bi-bar-chart', label: 'Statistiques' },
    { icon: 'bi bi-people', label: 'Utilisateurs' },
    { icon: 'bi bi-gear', label: 'Paramètres' },
  ];

  toggleSubmenu(label: string): void {
    this.openedSubmenu = this.openedSubmenu === label ? null : label;
    this.submenuState++;
  }

}
