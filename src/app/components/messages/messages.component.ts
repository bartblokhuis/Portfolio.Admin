import { Component, OnInit, Inject } from '@angular/core';
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

  messages: Message[] = []

  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Message[]>(baseUrl + 'Messages').subscribe(result => {
      this.messages = result;
      console.log(result);
    }, error => console.error(error));
   }

  ngOnInit(): void {
  }

  editMessage(message: Message) {
    const modalRef = this.modalService.open(EditMessageComponent, { size: 'lg' })
    modalRef.componentInstance.message = message;
  }

  deleteMessage(message: Message){
    const modalRef = this.modalService.open(DeleteMessageComponent, { size: 'lg' })
    modalRef.componentInstance.message = message;
  }

}
