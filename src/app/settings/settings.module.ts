import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutes } from './settings.routes';
import { EmailSettingsComponent } from './email-settings/email-settings.component';

@NgModule({
  declarations: [EmailSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SettingsModule { }
