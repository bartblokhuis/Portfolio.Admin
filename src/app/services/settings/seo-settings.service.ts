import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SeoSettings } from '../../data/SeoSettings';

@Injectable({
  providedIn: 'root'
})
export class SeoSettingsService {

  constructor(private http: HttpClient) {
   }

   getSeoSettings(): Observable<SeoSettings> {
    return this.http.get<SeoSettings>(`${environment.baseApiUrl}SeoSettings`);
   }

   saveSeoSettings(formData: any): Observable<SeoSettings> {
     return this.http.post<SeoSettings>(`${environment.baseApiUrl}SeoSettings`, formData);
   }
  }