import { Routes } from '@angular/router';
import { AuthGuard } from '../helpers/AuthGuard';

import { AdminComponent } from '../layouts/admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const DashboardRoutes: Routes = [{
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'dashboard',
        component: DashboardComponent
    }]
}];
