import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralSettings } from '../../data/GeneralSettings';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "GeneralSettings/"
   }

   getSettings(): Observable<GeneralSettings> {
    return this.http.get<GeneralSettings>(this.baseUrl);
   }

   saveSettings(formData: any): Observable<GeneralSettings> {
     return this.http.post<GeneralSettings>(this.baseUrl, formData);
   }
}
