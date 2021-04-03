import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {

  @Input() control: FormControl
  @Input() content: string
  @Output() onContentChanged = new EventEmitter()

  constructor() {

    this.control = this.control ?? new FormControl()
    if(!this.content){
      this.content = "";
    }
  }

  onChange($event) {
    this.onContentChanged.emit($event);
  }

}
