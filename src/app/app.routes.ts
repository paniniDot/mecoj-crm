import { Routes } from '@angular/router';
import { DashboardComponent } from './core/features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './core/features/page-not-found/page-not-found.component';
import { ClientListComponent } from './core/features/client-list/client-list.component';
import { EmployeeListComponent } from './core/features/employee-list/employee-list.component';

export const routes: Routes = [
    { path: '', title: 'Dashboard', component: DashboardComponent }, 
    { path: 'app-client-list', title: 'Lista Clienti', component: ClientListComponent },
    { path: 'app-employee-list', title: 'Lista Dipendenti', component: EmployeeListComponent },
    { path: '**', title: '404 Not Found', component: PageNotFoundComponent },
];
