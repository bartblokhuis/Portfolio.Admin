import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill, SkillType} from '../../data/Skill';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { DeleteSkillComponent } from './delete-skill/delete-skill.component';
import { DeleteSkillGroupComponent } from './delete-skill-group/delete-skill-group.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { HttpClient } from '@angular/common/http';
import { SkillGroup } from 'src/app/data/SkillGroup';

import { DOCUMENT } from '@angular/common'; 



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillGroups: SkillGroup[];
  skills: Skill[] = []

  frontEndSkills: Skill[] = this.skills;
  backEndSkills: Skill[] = this.skills;
  otherSkills: Skill[] = this.skills;

  createSkillGroup = false;
  
  constructor(private modalService: NgbModal, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, @Inject(DOCUMENT) private document) {
    this.loadSkills();
   }

   loadSkills() {
    this.http.get<SkillGroup[]>(this.baseUrl + 'SkillGroup').subscribe(result => {
      this.skillGroups = result;
    }, error => console.error(error));
   }

   addSkill(skillGroup: SkillGroup){
     const modalRef = this.modalService.open(CreateSkillComponent, { size: 'lg' })
     modalRef.componentInstance.skillGroup = skillGroup;
     modalRef.componentInstance.modalRef = modalRef;

     modalRef.result.then((result => {
      this.loadSkills();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
   }

   editSkill(skillGroup : SkillGroup, skill: Skill){
    const modalRef = this.modalService.open(EditSkillComponent, { size: 'lg' })
    modalRef.componentInstance.skill = skill;
    modalRef.componentInstance.skillGroup = skillGroup;
    modalRef.componentInstance.modalRef = modalRef;

    modalRef.result.then((result => {
      this.loadSkills();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
  }

  removeSkill(skill: Skill){
    const modalRef = this.modalService.open(DeleteSkillComponent, { size: 'lg' });
    modalRef.componentInstance.skill = skill;
    modalRef.componentInstance.modalRef = modalRef;

    modalRef.result.then((result => {
      this.loadSkills();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
  }

  editSkillGroup(skillGroupId: number){
    const input = this.document.getElementById(skillGroupId);
    const titleLabel = this.document.getElementById(skillGroupId + "_label");
    const editButton = this.document.getElementById(skillGroupId + "_edit_button");
    const saveButton = this.document.getElementById(skillGroupId + "_save_button");
    input.style.display = 'block';
    saveButton.style.display = 'block';
    titleLabel.style.display = 'none';
    editButton.style.display = 'none';

  }

  saveSkillGroup(skillGroup: SkillGroup){
    const input = this.document.getElementById(skillGroup.id);
    skillGroup.title = input.value;

    this.http.put(this.baseUrl + "SkillGroup", skillGroup).subscribe((result: SkillGroup) => {
      skillGroup.title = result.title;


      const titleLabel = this.document.getElementById(skillGroup.id + "_label");
    const editButton = this.document.getElementById(skillGroup.id + "_edit_button");
    const saveButton = this.document.getElementById(skillGroup.id + "_save_button");
    input.style.display = 'none';
    saveButton.style.display = 'none';
    titleLabel.style.display = 'block';
    editButton.style.display = 'block';

    });
  }

  deleteSkillGroup(skillGroup: SkillGroup){
    const modalRef = this.modalService.open(DeleteSkillGroupComponent, { size: 'lg' });
    modalRef.componentInstance.skillGroup = skillGroup;
    modalRef.componentInstance.modalRef = modalRef;

    modalRef.result.then((result => {
      this.loadSkills();
    }))
    .catch((error) => {
      console.log(`ran into error: ${error}`)
    });
  }

  addSkillGroup() {
    this.createSkillGroup = true;
  }

  saveNewSkillGroup(addNewSkill: boolean){
    const title = this.document.getElementById("newSkillGroupTitle");
    var skillGroup = {
      id: 0,
      title: title.value,
      displayNumber: 0
    }

    this.http.post(this.baseUrl + "SkillGroup", skillGroup).subscribe((result: SkillGroup) => {
      this.loadSkills();
      this.createSkillGroup = false;
      title.value = "";

      if(addNewSkill){
        this.addSkill(result);
      }

    })
  }

  ngOnInit(): void {
  }
  
}
