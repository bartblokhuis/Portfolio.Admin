import { Component, Input, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/data/Skill';
import { SkillService } from 'src/app/services/skills/skill.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.scss']
})
export class DeleteSkillComponent implements OnInit {

  @Input() skill: Skill;
  @Input() modalRef: NgbModalRef;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
  }

  close(){
    this.modalRef.close();
  }

  remove(id: number){
    console.log(id);

    this.skillService.deleteSkill(id).subscribe(result => {
      this.modalRef.close();
    });
  }

}
