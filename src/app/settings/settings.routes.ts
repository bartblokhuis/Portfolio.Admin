import { Routes } from '@angular/router';

import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { AuthGuard } from '../helpers/AuthGuard';

export const SettingsRoutes: Routes = [{
    path: '',
    canActivate: [AuthGuard],
    children: [{
        path: 'email-settings',
        component: EmailSettingsComponent
    }]
}];
