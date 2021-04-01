import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/data/project';
import { ProjectService } from '../../../services/projects/project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { DeleteProjectComponent } from '../delete-project/delete-project.component';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    })
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

}
