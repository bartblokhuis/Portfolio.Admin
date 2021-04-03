import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUpdateSkill, Skill } from 'src/app/data/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "Skill/"
   }

   getSkills(): Observable<Skill[]> {
     return this.http.get<Skill[]>(this.baseUrl);
   }

   getSkillsByGroupId(groupId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + 'GetBySkillGroupId/' + groupId);
  }

  createSkill(skill: CreateUpdateSkill): Observable<Skill> {
    return this.http.post<Skill>(this.baseUrl, skill);
  }

  editSkill(skill: CreateUpdateSkill): Observable<Skill> {
    return this.http.put<Skill>(this.baseUrl, skill);
  }

  saveSkillImage(skillId: number, formData: FormData): Observable<Skill> {
    return this.http.put<Skill>(this.baseUrl + "SaveSkillImage/" + skillId, formData)
  }

  deleteSkill(id: number): Observable<object> {
    return this.http.delete(this.baseUrl+ "?id=" + id);
  }

}
