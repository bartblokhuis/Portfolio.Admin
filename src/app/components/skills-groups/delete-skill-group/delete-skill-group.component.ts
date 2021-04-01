import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SkillGroup } from 'src/app/data/SkillGroup';
import { SkillGroupService } from 'src/app/services/skillgroup/skillgroup.service';

@Component({
  selector: 'app-delete-skill-group',
  templateUrl: './delete-skill-group.component.html',
  styleUrls: ['./delete-skill-group.component.scss']
})
export class DeleteSkillGroupComponent implements OnInit {

  @Input() skillGroup: SkillGroup;
  @Input() modalRef: NgbModalRef;

  constructor(private skillGroupService: SkillGroupService) { }

  ngOnInit(): void {
  }

  close(){
    this.modalRef.close();
  }

  remove(id: number){
    this.skillGroupService.deleteSkillGroup(id).subscribe(() => {
      this.modalRef.close();
    });
  }

}
