import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [LoginComponent, UpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule,
]
})
export class UserModule { }
