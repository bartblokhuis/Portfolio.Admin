import { Component, OnInit, Input, Inject } from '@angular/core';
import { Message, MessageStatusToLabelMapping, MessageStatus } from '../../../data/Message';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
})

export class EditMessageComponent implements OnInit {

  @Input() message: Message;
  @Input() afterInit: Function;
  @Input() modalRef: NgbModalRef;

  http: HttpClient;
  baseUrl: string;

  editMessageForm = new FormGroup({
    messageStatus: new FormControl('')
  });

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.baseUrl = baseUrl;
    this.http = http;
  }

  ngOnInit(): void {
    this.editMessageForm.controls.messageStatus.setValue(this.message.messageStatus);
  }

  mapping = MessageStatusToLabelMapping;
  messageTypes = [MessageStatus.Closed, MessageStatus.Read, MessageStatus.Unread, MessageStatus.WaitingResponse];

  close(){
    this.modalRef.close();
  }

  save() {
    var values = this.editMessageForm.value;

    var data = {
      "id": this.message.id,
      "messageStatus": parseInt(values.messageStatus)
    };

    this.http.put(this.baseUrl + "Messages", data).subscribe((result) =>{
      this.modalRef.close();
    });
  }

  public setMessage(message: Message){
    console.log("test test")
    this.message = message;
    console.log(message);
    this.editMessageForm.controls.messageStatus.setValue(message.messageStatus);
  }

}
