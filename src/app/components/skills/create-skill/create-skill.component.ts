import { Input } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SkillGroup } from 'src/app/data/SkillGroup';
import { Skill } from 'src/app/data/Skill';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html'
})
export class CreateSkillComponent implements OnInit {

  @Input() skillGroup: SkillGroup;
  @Input() modalRef: NgbModalRef;

  currentFileName: string = 'File';

  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
   
   }

  ngOnInit(): void {
  }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.currentFileName = file.name;
      this.createForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){

    var data = {
      id: 0,
      name: this.createForm.get('name').value,
      iconPath: '',
      displayNumber: 0,
      skillGroupId: this.skillGroup.id
    };

    this.http.post(this.baseUrl + "Skill", data).subscribe((result: Skill) => {
      var skillId = result.id;

      const formData = new FormData();
      formData.append('icon', this.createForm.get('fileSource').value);

      this.http.put(this.baseUrl + "Skill/SaveSkillImage/" + skillId, formData).subscribe((result) => {
        this.modalRef.close();
      });
    });
  }

}
