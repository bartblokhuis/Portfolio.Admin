import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/AuthGuard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
},
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: 'dashboard', 
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      }, 
      {
        path: 'about-me',
        loadChildren: './about-me/about-me.module#AboutMeModule',
      }, 
      {
        path: 'skills',
        loadChildren: './skill-groups/skill-groups.module#SkillGroupsModule'
      }, 
      {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule' 
      }, 
      {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule' 
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: 'login',
      loadChildren: './user/user.module#UserModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
