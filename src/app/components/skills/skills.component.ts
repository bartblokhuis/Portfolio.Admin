import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill, SkillType} from '../../data/Skill';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { DeleteSkillComponent } from './delete-skill/delete-skill.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { HttpClient } from '@angular/common/http';
import { SkillGroup } from 'src/app/data/SkillGroup';



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

  private baseUrl: string;
  private http: HttpClient;
  
  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;

    this.loadSkills();
   }

   loadSkills() {
    this.http.get<SkillGroup[]>(this.baseUrl + 'SkillGroup').subscribe(result => {
      this.skillGroups = result;
      console.log(result);
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

  ngOnInit(): void {
  }

  dropFrontEndSkills(event: CdkDragDrop<Skill[]>) {
    this.frontEndSkills = this.drop(event, this.frontEndSkills);
  }

  dropBackEndSkills(event: CdkDragDrop<Skill[]>) {
    this.backEndSkills = this.drop(event, this.backEndSkills);
  }

  dropOtherSkills(event: CdkDragDrop<Skill[]>) {
    this.otherSkills = this.drop(event, this.otherSkills);
  }

  drop(event: CdkDragDrop<Skill[]>, skills: Skill[]) {
    var startIndex = event.previousIndex;
    var endIndex = event.currentIndex;

    //Set the start and end index based on wether the project is moving up or down.
    if(event.previousIndex > event.currentIndex){
      startIndex = event.currentIndex;
      endIndex = event.previousIndex;
    }

    for (let i = startIndex; i <= endIndex; i++){
      var skill = skills[i];

      if(i === event.previousIndex){
        skill.displayNumber = event.currentIndex;
      }

      else if(event.previousIndex > event.currentIndex) {
        skill.displayNumber++;
      }

      else{
        skill.displayNumber--;
      }
    }
    
    skills.sort((a,b) => a.displayNumber - b.displayNumber);

    return skills;
  }

  
}
