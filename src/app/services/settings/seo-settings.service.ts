import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeoSettings } from '../../data/SeoSettings';

@Injectable({
  providedIn: 'root'
})
export class SeoSettingsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "SeoSettings/"
   }

   getSeoSettings(): Observable<SeoSettings> {
    return this.http.get<SeoSettings>(this.baseUrl);
   }

   saveSeoSettings(formData: any): Observable<SeoSettings> {
     return this.http.post<SeoSettings>(this.baseUrl, formData);
   }
  }