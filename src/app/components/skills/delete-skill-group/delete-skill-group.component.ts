import { Component, Input, Inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';
import { SkillGroup } from 'src/app/data/SkillGroup';

@Component({
  selector: 'app-delete-skill-group',
  templateUrl: './delete-skill-group.component.html'
})
export class DeleteSkillGroupComponent {

  @Input() skillGroup: SkillGroup;
  @Input() modalRef: NgbModalRef;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){
  }

  close(){
    this.modalRef.close();
  }

  remove(id: number){
    console.log(id);

    this.http.delete(this.baseUrl + "SkillGroup?id=" + id).subscribe(result => {
      this.modalRef.close();
    });
  }

}
