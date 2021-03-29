import { Component, Input, Inject } from '@angular/core';
import { Project } from '../../../data/project';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent {

  @Input() project: Project;
  @Input() modalRef: NgbModalRef;

  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.baseUrl = baseUrl;
    this.http = http;
  }

  remove(id: number){
    console.log(id);

    this.http.delete(this.baseUrl + "Project?id=" + id).subscribe(result => {
      this.modalRef.close();
    });
  }
}
