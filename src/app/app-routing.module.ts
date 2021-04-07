import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSkillGroupComponent } from './components/skills-groups/list-skill-group/list-skill-group.component';
import { LoginComponent } from './components/login/login.component';
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
        canActivate: [AuthGuard],
      }, 
      {
        path: 'about-me',
        loadChildren: './about-me/about-me.module#AboutMeModule',
      }, 
      {
        path: 'skills',
        component: ListSkillGroupComponent
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
      component: LoginComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
