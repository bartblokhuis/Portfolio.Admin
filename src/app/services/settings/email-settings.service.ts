import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailSettings } from '../../data/EmailSettings';

@Injectable({
  providedIn: 'root'
})
export class EmailSettingsService {

  constructor(private http: HttpClient) {
   }

   getEmailSettings(): Observable<EmailSettings> {
    return this.http.get<EmailSettings>(`${environment.baseApiUrl}EmailSettings`);
   }

   saveEmailSettings(formData: any): Observable<EmailSettings> {
     return this.http.post<EmailSettings>(`${environment.baseApiUrl}EmailSettings`, formData);
   }
}
