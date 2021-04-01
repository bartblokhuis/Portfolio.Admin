import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../../data/AboutMe';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "AboutMe/"
   }

   getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>(this.baseUrl);
   }

   saveAboutMe(formData: any): Observable<AboutMe> {
     return this.http.post<AboutMe>(this.baseUrl, formData);
   }
}
