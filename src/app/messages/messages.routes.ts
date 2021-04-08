import { Routes } from '@angular/router';
import { AuthGuard } from '../helpers/AuthGuard';

import { AdminComponent } from '../layouts/admin/admin.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

export const MessageRoutes: Routes = [{
    path: '',
    canActivate: [AuthGuard],
    children: [{
        path: 'messages',
        component: ListMessagesComponent
    }]
}];
