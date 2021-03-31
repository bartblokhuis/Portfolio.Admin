import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from 'src/app/data/Messages/Message';
import { UpdateMessage } from 'src/app/data/Messages/UpdateMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) {
    this.baseUrl += "Messages/"
   }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }

  createMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.baseUrl, message);
  }

  editMessage(updateMessage: UpdateMessage): Observable<Message> {
    return this.http.put<Message>(this.baseUrl, updateMessage);
  }

  deleteMessage(messageId: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "?messageId=" + messageId);
  }
}
