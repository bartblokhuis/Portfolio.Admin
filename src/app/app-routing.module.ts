import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { ListProjectComponent } from './components/projects/list-project/list-project.component';
import { ListSkillGroupComponent } from './components/skills-groups/list-skill-group/list-skill-group.component';
import { AuthGuard } from './helpers/AuthGuard';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuard] },
  { path: 'skills', component: ListSkillGroupComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ListProjectComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: ListMessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
