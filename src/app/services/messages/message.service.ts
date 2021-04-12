import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from 'src/app/data/Messages/Message';
import { UpdateMessage } from 'src/app/data/Messages/UpdateMessage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
   }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.baseApiUrl}Messages`);
  }

  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${environment.baseApiUrl}Messages`, message);
  }

  editMessage(updateMessage: UpdateMessage): Observable<Message> {
    return this.http.put<Message>(`${environment.baseApiUrl}Messages`, updateMessage);
  }

  deleteMessage(messageId: number): Observable<Object> {
    return this.http.delete(`${environment.baseApiUrl}Messages?messageId=${messageId}`);
  }
}
