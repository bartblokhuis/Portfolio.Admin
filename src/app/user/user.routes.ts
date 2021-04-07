import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from '../layouts/auth/auth.component';

export const UserRoutes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [{
        path: 'login',
        component: LoginComponent
    }]
}];
