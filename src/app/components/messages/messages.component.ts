import { Component, OnInit, Inject, ModuleWithComponentFactories } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message, MessageStatus } from '../../data/Message';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  http: HttpClient;
  baseUrl: string;

  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
   }

  ngOnInit(): void {
    this.LoadMessages();
  }

  editMessage(message: Message) {
    const modalRef = this.modalService.open(EditMessageComponent, { size: 'lg' })
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.result.then((result => {
      this.LoadMessages();
    }))
  }

  deleteMessage(message: Message){
    const modalRef = this.modalService.open(DeleteMessageComponent, { size: 'lg' });
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.setMessage(message);
    modalRef.componentInstance.modalRef = modalRef;

    modalRef.result.then((result => {
      this.LoadMessages();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
  }

  LoadMessages(){
    this.http.get<Message[]>(this.baseUrl + 'Messages').subscribe(result => {
      this.messages = result;
      console.log(result);
    }, error => console.error(error));
  }

}
