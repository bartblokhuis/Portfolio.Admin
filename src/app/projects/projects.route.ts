import { Routes } from '@angular/router';

import { ListProjectComponent } from './list-project/list-project.component';

export const ProjectRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: ListProjectComponent
    }]
}];
