import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailSettings } from '../../data/EmailSettings';

@Injectable({
  providedIn: 'root'
})
export class EmailSettingsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "EmailSettings/"
   }

   getEmailSettings(): Observable<EmailSettings> {
    return this.http.get<EmailSettings>(this.baseUrl);
   }

   saveEmailSettings(formData: any): Observable<EmailSettings> {
     return this.http.post<EmailSettings>(this.baseUrl, formData);
   }
}
