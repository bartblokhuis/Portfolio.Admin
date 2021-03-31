import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/data/Skill';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SkillGroup } from 'src/app/data/SkillGroup';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html'
})
export class EditSkillComponent implements OnInit {

  @Input() skillGroup: SkillGroup;
  @Input() modalRef: NgbModalRef;
  @Input() skill: Skill

  currentFileName: string = 'File';

  editForm = new FormGroup({
    name: new FormControl('test'),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
    
  }

  ngOnInit(): void {
    this.editForm.controls.name.setValue(this.skill.name);
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.currentFileName = file.name;
      this.editForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){

    var data = {
      id: this.skill.id,
      name: this.editForm.get('name').value,
      iconPath: '',
      displayNumber: 0,
      skillGroupId: this.skillGroup.id
    };

    this.http.put(this.baseUrl + "Skill", data).subscribe((result: Skill) => {
      var skillId = result.id;
      const formData = new FormData();

      var fileSource = this.editForm.get('fileSource').value;

      if(!fileSource){
        this.modalRef.close();
        return;
      }

      formData.append('icon', fileSource);
      this.http.put(this.baseUrl + "Skill/SaveSkillImage/" + skillId, formData).subscribe((result) => {
        this.modalRef.close();
      });
    });
  }

}
