import { Component } from '@angular/core';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {HeaderMenuComponent} from '../header-menu/header-menu.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [HeaderMenuComponent,SidenavComponent,RouterOutlet],
  standalone:true,
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
