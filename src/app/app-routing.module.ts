import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/AuthGuard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
},
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: '', 
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        
      }, 
      {
        path: '',
        loadChildren: './about-me/about-me.module#AboutMeModule',
      }, 
      {
        path: '',
        loadChildren: './skill-groups/skill-groups.module#SkillGroupsModule'
      }, 
      {
        path: '',
        loadChildren: './projects/projects.module#ProjectsModule' 
      }, 
      {
        path: '',
        loadChildren: './messages/messages.module#MessagesModule' 
      }, 
      {
        path: '',
        loadChildren: './settings/settings.module#SettingsModule' 
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren: './user/user.module#UserModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
