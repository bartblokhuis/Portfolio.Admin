import { Component, Input, Inject } from '@angular/core';
import { Skill } from '../../../data/Skill';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html'
})
export class DeleteSkillComponent {

  @Input() skill: Skill;
  @Input() modalRef: NgbModalRef;

  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.baseUrl = baseUrl;
    this.http = http;
  }

  close(){
    this.modalRef.close();
  }

  remove(id: number){
    console.log(id);

    this.http.delete(this.baseUrl + "Skill?id=" + id).subscribe(result => {
      this.modalRef.close();
    });
  }

}
