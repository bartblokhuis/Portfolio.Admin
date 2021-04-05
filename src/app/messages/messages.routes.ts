import { Routes } from '@angular/router';

import { ListMessagesComponent } from './list-messages/list-messages.component';

export const MessageRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: ListMessagesComponent
    }]
}];
