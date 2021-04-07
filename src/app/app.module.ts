import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }  from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './helpers/JwtInterceptor';
import { ErrorInterceptor } from './helpers/ErrorInterceptor';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { SharedModule } from './components/shared/shared.module';
import { AboutMeModule } from './about-me/about-me.module';
import { MessagesModule } from './messages/messages.module';
import { ComponentsModule } from './components/components.module';
import { ProjectsModule } from './projects/projects.module'; 
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { SkillGroupsModule } from './skill-groups/skill-groups.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
  ],
  imports: [
    UserModule,
    AboutMeModule,
    MessagesModule,
    ProjectsModule,
    DashboardModule,
    SkillGroupsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    ComponentsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
