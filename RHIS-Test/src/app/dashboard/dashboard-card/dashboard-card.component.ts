import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dashboard-card',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  isEditing = false;
  @Input() data?:any[];
  @Input() title?:string;
  @Input() customClass?:string;
  @Input() showText=true;
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
  onRowEdit(row: any) {
    console.log('Editing row:', row);
    row.isClicked=true
  }

  onRowCheck(row: any) {
    row.isClicked=false
  }

}
