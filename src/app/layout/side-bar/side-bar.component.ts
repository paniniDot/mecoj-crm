import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule], 
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent {
  isExpanded = true;

  menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { label: 'Clienti', path: '/app-client-list', icon: 'people' },
    { label: 'Dipendenti', path: '/app-employee-list', icon: 'group' },
    { label: 'Calendario', path: '/app-calendar', icon: 'calendar_today' },
    { label: 'Bilanci', path: '/finances', icon: 'account_balance' },
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
