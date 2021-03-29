import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CreateProjectComponent } from './create-project/create-project.component';
import { Project } from '../../data/project';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = []

  closeResult = '';

  private baseUrl: string;
  private http: HttpClient;

  constructor(private modalService: NgbModal,  http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;

    this.loadProjects();
   }

  ngOnInit(): void {
  }

  addProject() {
    this.modalService.open(CreateProjectComponent, { size: 'lg' })
  }

  editProject(project: Project) {
    const modalRef = this.modalService.open(EditProjectComponent, { size: 'lg' })
    modalRef.componentInstance.project = project;
  }

  deleteProject(project: Project){
    const modalRef = this.modalService.open(DeleteProjectComponent, { size: 'lg' });
    modalRef.componentInstance.project = project;
    modalRef.componentInstance.modalRef = modalRef;

    modalRef.result.then((result => {
      this.loadProjects();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
  }

  loadProjects(){
    this.http.get<Project[]>(this.baseUrl + 'Project').subscribe(result => {
      this.projects = result;
      console.log(result);
    }, error => console.error(error));
  }

  drop(event: CdkDragDrop<Project[]>) {

    var startIndex = event.previousIndex;
    var endIndex = event.currentIndex;

    //Set the start and end index based on wether the project is moving up or down.
    if(event.previousIndex > event.currentIndex){
      startIndex = event.currentIndex;
      endIndex = event.previousIndex;
    }

    for (let i = startIndex; i <= endIndex; i++){
      var project = this.projects[i];

      if(i === event.previousIndex){
        project.displayOrder = event.currentIndex;
      }

      else if(event.previousIndex > event.currentIndex) {
        project.displayOrder++;
      }

      else{
        project.displayOrder--;
      }
    }
    
    this.projects.sort((a,b) => a.displayOrder - b.displayOrder);
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
