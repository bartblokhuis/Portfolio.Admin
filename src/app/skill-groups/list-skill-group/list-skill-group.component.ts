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

  editSkillGroup(skillGroupId: number){
    
    this.hideSkillGroupLabel(skillGroupId);
    this.showSkillGroupEditField(skillGroupId);
    this.hideSkillGroupEditIcon(skillGroupId);
    this.showSkillGroupSaveIcon(skillGroupId);

  }

  saveSkillGroup(skillGroup: SkillGroup): void {

    skillGroup.title = this.document.getElementById(skillGroup.id + "_input").value;

    this.skillGroupService.editSkillGroup(skillGroup).subscribe(() => {
      this.showSkillGroupLabel(skillGroup.id);
      this.hideSkillGroupEditField(skillGroup.id);
      this.showSkillGroupEditIcon(skillGroup.id);
      this.hideSkillGroupSaveIcon(skillGroup.id);
    });
  }

  hideSkillGroupLabel(skillGroupId: number): void {
    const labelEl = this.document.getElementById(skillGroupId + "_label");
    labelEl.style.display = 'none';
  }

  showSkillGroupLabel(skillGroupId: number): void {
    const labelEl = this.document.getElementById(skillGroupId + "_label");
    labelEl.style.display = 'block';
  }

  hideSkillGroupEditField(skillGroupId: number): void {
    const inputEl = this.document.getElementById(skillGroupId + "_input");
    inputEl.style.display = 'none';
  }

  showSkillGroupEditField(skillGroupId: number): void {
    const inputEl = this.document.getElementById(skillGroupId + "_input");
    inputEl.style.display = 'block';
  }

  hideSkillGroupEditIcon(skillGroupId: number): void {
    const inputEl = this.document.getElementById(skillGroupId + "_edit_button");
    inputEl.style.display = 'none';
  }

  showSkillGroupEditIcon(skillGroupId: number): void {
    const inputEl = this.document.getElementById(skillGroupId + "_edit_button");
    inputEl.style.display = 'block';
  }

  hideSkillGroupSaveIcon(skillGroupId: number): void {
    const inputEl = this.document.getElementById(skillGroupId + "_save_button");
    inputEl.style.display = 'none';
  }

  showSkillGroupSaveIcon(skillGroupId: number): void {
    const inputEl = this.document.getElementById(skillGroupId + "_save_button");
    inputEl.style.display = 'block';
  }

}
