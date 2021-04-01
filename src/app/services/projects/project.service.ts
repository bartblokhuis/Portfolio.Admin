import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/data/project';

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

   deleteProject(projectId: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "?id=" + projectId);
  }
}
