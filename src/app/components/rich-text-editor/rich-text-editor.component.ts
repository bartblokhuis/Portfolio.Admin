import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {

  @Input() control: FormControl
  @Input() content: string

  constructor() {

    this.control = this.control ?? new FormControl()
    if(!this.content){
      this.content = "";
    }
  }

  onChange() {
    alert("Changed");
  }

}
