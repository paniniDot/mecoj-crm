import { Routes } from '@angular/router';
import { DashboardComponent } from './core/features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './core/features/page-not-found/page-not-found.component';
import { ClientListComponent } from './core/features/client-list/client-list.component';
import { EmployeeListComponent } from './core/features/employee-list/employee-list.component';
import { CalendarComponent } from './core/features/calendar/calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: 'app-client-list', title: 'Lista Clienti', component: ClientListComponent },
  { path: 'app-employee-list', title: 'Lista Dipendenti', component: EmployeeListComponent },
  { path: 'app-calendar', title: 'Calendario', component: CalendarComponent },
  { path: '**', title: '404 Not Found', component: PageNotFoundComponent },
];
