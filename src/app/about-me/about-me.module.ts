import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeRoutes } from './about-me.routes';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutMeRoutes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
],
declarations: [AboutMeComponent]
})
export class AboutMeModule { }
