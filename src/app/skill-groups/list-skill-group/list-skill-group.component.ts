import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillGroup } from 'src/app/data/SkillGroup';
import { SkillGroupService } from '../../services/skillgroup/skillgroup.service';
import { DeleteSkillGroupComponent } from '../delete-skill-group/delete-skill-group.component';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CreateSkillComponent } from '../skills/create-skill/create-skill.component';

@Component({
  selector: 'app-list-skill-group',
  templateUrl: './list-skill-group.component.html',
  styleUrls: ['./list-skill-group.component.scss']
})
export class ListSkillGroupComponent implements OnInit {

  skillGroups: SkillGroup[];
  showCreateSkillGroup: boolean = false;

  constructor(private modalService: NgbModal, private skillGroupService: SkillGroupService, @Inject(DOCUMENT) private document) { }

  ngOnInit(): void {
    this.loadSkillGroups();
  }

  loadSkillGroups(): void{
    this.skillGroupService.getSkillGroups().subscribe((skillGroups) => {
      this.skillGroups = skillGroups;
    });
  }

  deleteSkillGroup(skillGroup: SkillGroup){
    const modalRef = this.modalService.open(DeleteSkillGroupComponent, { size: 'lg' });
    modalRef.componentInstance.skillGroup = skillGroup;
    modalRef.componentInstance.modalRef = modalRef;

    modalRef.result.then((result => {
      this.loadSkillGroups();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
  }

  createSkillGroup(): void {
    this.showCreateSkillGroup = true;
  }

  createdSkillGroup (skillGroup: SkillGroup, openNewSkillModal: boolean) : void {
    if(openNewSkillModal){
      const modalRef = this.modalService.open(CreateSkillComponent, { size: 'lg' })
      modalRef.componentInstance.skillGroup = skillGroup;
      modalRef.componentInstance.modalRef = modalRef;

      modalRef.result.then(() => {
        this.showCreateSkillGroup = false;
        this.loadSkillGroups();
      });
    }
    else{
      this.showCreateSkillGroup = false;
      this.loadSkillGroups();
    }
  }

}
