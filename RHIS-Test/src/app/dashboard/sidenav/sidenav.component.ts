import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, FormsModule],
  standalone:true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('slideInOut', [
      state('expanded', style({ width: '240px' })),
      state('collapsed', style({ width: '60px' })),
      transition('expanded <=> collapsed', [animate('300ms ease-in-out')])
    ]),
    trigger('slideFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)', height: 0 }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)', height: '*' })
        )
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)', height: 0 })
        )
      ])
    ])
  ]
})
export class SidenavComponent {
  isExpanded = true;
  searchTerm = '';


  sections = [
    {
      title: 'Responsables',
      expanded: true,
      employees: [
        {
          name: 'Lydia Bauer',
          role: 'Responsable cuisine',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
          status: 'green',
          selected: true,
          ringColor: 'purple'
        },
        {
          name: 'Nom Prénom',
          role: 'Responsable terrace',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          status: 'blue',
          ringColor: 'cyan'
        },
        {
          name: 'Nom Prénom',
          role: 'Chef de service',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
          status: 'green',
          ringColor: 'purple'
        },
        {
          name: 'Nom Prénom',
          role: 'Responsable de salle',
          avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
          status: 'yellow',
          ringColor: 'orange'
        }
      ]
    },
    {
      title: 'Cuisine',
      expanded: true,
      employees: [
        {
          name: 'Nom Prénom',
          role: 'Manager',
          avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
          status: 'red',
          ringColor: 'red'
        },
        {
          name: 'Nom Prénom',
          role: 'Serveur',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
          status: 'green',
          ringColor: 'blue'
        }
      ]
    }
  ];

  setSelected(section: any, employee: any) {
    this.sections.forEach(s =>
      s.employees.forEach(e => (e.selected = false))
    );
    employee.selected = true;
  }
  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
