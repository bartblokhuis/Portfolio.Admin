import { Component, OnInit, Input, Inject } from '@angular/core';
import { Message } from '../../../data/Message';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html'
})
export class DeleteMessageComponent implements OnInit {

  @Input() message: Message;
  @Input() modalRef: NgbModalRef;

  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.baseUrl = baseUrl;
    this.http = http;
  }

  ngOnInit(): void {

  }

  close(){
    this.modalRef.close();
  }

  remove(id: number){
    console.log(id);

    this.http.delete(this.baseUrl + "Messages?messageId=" + id).subscribe(result => {
      this.modalRef.close();
    });
  }

}
