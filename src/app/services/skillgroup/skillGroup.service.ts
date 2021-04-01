import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillGroup } from 'src/app/data/SkillGroup';

@Injectable({
  providedIn: 'root'
})
export class SkillGroupService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "SkillGroup/"
   }

   getSkillGroups(): Observable<SkillGroup[]> {
    return this.http.get<SkillGroup[]>(this.baseUrl);
  }

  createSkillGroup(skillGroup: SkillGroup): Observable<SkillGroup> {
    return this.http.post<SkillGroup>(this.baseUrl, skillGroup);
  }

  editSkillGroup(updateSkillGroup: SkillGroup): Observable<SkillGroup> {
    return this.http.put<SkillGroup>(this.baseUrl, updateSkillGroup);
  }

  deleteSkillGroup(skillGroupId: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "?id=" + skillGroupId);
  }
}
