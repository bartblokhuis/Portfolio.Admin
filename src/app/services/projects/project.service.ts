import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, UpdateProjectSkills } from 'src/app/data/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "Project/"
   }

   getProjects(): Observable<Project[]> {
     return this.http.get<Project[]>(this.baseUrl);
   }

   createProject(project: Project): Observable<Project> {
     return this.http.post<Project>(this.baseUrl, project);
   }

   updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl, project);
  }

   updateProjectSkills(projectSkillsModel: UpdateProjectSkills): Observable<Project> {
     return this.http.put<Project>(this.baseUrl + "UpdateSkills", projectSkillsModel);
   }

   updateProjectImage(projectId: number, image: FormData): Observable<Project> {
     return this.http.put<Project>(this.baseUrl + "UpdateDemoImage/" + projectId, image);
   }

   deleteProject(projectId: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "?id=" + projectId);
  }
}
