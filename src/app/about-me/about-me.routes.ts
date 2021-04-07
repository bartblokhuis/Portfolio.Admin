import { Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { AdminComponent } from '../layouts/admin/admin.component';
import { AuthGuard } from '../helpers/AuthGuard';

export const AboutMeRoutes: Routes = [{
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'about-me',
        component: AboutMeComponent
    }]
}];
