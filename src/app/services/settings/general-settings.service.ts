import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralSettings } from '../../data/GeneralSettings';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {

  constructor(private http: HttpClient) {
   }

   getSettings(): Observable<GeneralSettings> {
    return this.http.get<GeneralSettings>(`${environment.baseApiUrl}GeneralSettings`);
   }

   saveSettings(formData: any): Observable<GeneralSettings> {
     return this.http.post<GeneralSettings>(`${environment.baseApiUrl}GeneralSettings`, formData);
   }
}
