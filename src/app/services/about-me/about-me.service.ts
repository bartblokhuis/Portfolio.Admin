import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AboutMe } from '../../data/AboutMe';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private http: HttpClient) {
   }

   getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>(`${environment.baseApiUrl}AboutMe`);
   }

   saveAboutMe(formData: any): Observable<AboutMe> {
     return this.http.post<AboutMe>(`${environment.baseApiUrl}AboutMe`, formData);
   }
}
