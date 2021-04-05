import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { ListProjectComponent } from './components/projects/list-project/list-project.component';
import { ListSkillGroupComponent } from './components/skills-groups/list-skill-group/list-skill-group.component';
import { LoginComponent } from './components/login/login.component';
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
        path: 'dashboard', 
        component: DashboardComponent, 
      }, 
      {
        path: 'about-me',
        component: AboutMeComponent
      }, 
      {
        path: 'skills',
        component: ListSkillGroupComponent
      }, 
      {
        path: 'projects',
        component: ListProjectComponent
      }, 
      {
        path: 'messages',
        component: ListMessagesComponent
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
