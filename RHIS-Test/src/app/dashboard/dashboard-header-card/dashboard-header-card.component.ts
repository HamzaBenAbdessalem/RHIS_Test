import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard-header-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dashboard-header-card.component.html',
  styleUrl: './dashboard-header-card.component.scss'
})
export class DashboardHeaderCardComponent {
  @Input() tabs:any[]=[];
  selectTab(selectedTab: any) {
    this.tabs.forEach(tab => tab.active = false);
    selectedTab.active = true;
  }
}
