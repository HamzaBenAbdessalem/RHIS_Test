import { Routes } from '@angular/router';
import {DashboardLayoutComponent} from './dashboard/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      // Add more child routes
    ]
  }
];
