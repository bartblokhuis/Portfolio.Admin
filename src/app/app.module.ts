import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }  from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateProjectComponent } from './components/projects/create-project/create-project.component';
import { EditProjectComponent } from './components/projects/edit-project/edit-project.component';
import { DeleteProjectComponent } from './components/projects/delete-project/delete-project.component';
import { EditMessageComponent } from './components/messages/edit-message/edit-message.component';
import { DeleteMessageComponent } from './components/messages/delete-message/delete-message.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateSkillComponent } from './components/skills-groups/skills/create-skill/create-skill.component';
import { EditSkillComponent } from './components/skills-groups/skills/edit-skill/edit-skill.component';
import { DeleteSkillComponent } from './components/skills-groups/skills/delete-skill/delete-skill.component';
import { ListMessagesComponent } from './components/messages/list-messages/list-messages.component';
import { DeleteSkillGroupComponent } from './components/skills-groups/delete-skill-group/delete-skill-group.component';
import { ListSkillGroupComponent } from './components/skills-groups/list-skill-group/list-skill-group.component';
import { CreateSkillGroupComponent } from './components/skills-groups/create-skill-group/create-skill-group.component';
import { ListSkillComponent } from './components/skills-groups/skills/list-skill/list-skill.component';
import { ListProjectComponent } from './components/projects/list-project/list-project.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from './helpers/JwtInterceptor';
import { ErrorInterceptor } from './helpers/ErrorInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AboutMeComponent,
    RichTextEditorComponent,
    CreateProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    EditMessageComponent,
    DeleteMessageComponent,
    CreateSkillComponent,
    EditSkillComponent,
    DeleteSkillComponent,
    ListMessagesComponent,
    DeleteSkillGroupComponent,
    ListSkillGroupComponent,
    CreateSkillGroupComponent,
    ListSkillComponent,
    ListProjectComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
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
