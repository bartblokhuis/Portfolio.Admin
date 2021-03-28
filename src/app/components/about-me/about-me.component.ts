import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {

  public abouteMe: AboutMe = {title: "", content: ""};
  private http: HttpClient;

  editor = new FormControl('test')

  aboutMeForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  constructor(http: HttpClient) {

    this.http = http;
    http.get<AboutMe>("https://localhost:44301/" + 'AboutMe').subscribe(result => {
      this.aboutMeForm.controls.title.setValue(result.title);
      this.aboutMeForm.controls.content.setValue(result.content);

    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  saveAboutMe(): void {
    console.log(this.editor.value);
  }

  getValues(): void {
    this.http.post<AboutMe>("https://localhost:44301/" + 'AboutMe', this.aboutMeForm.value).subscribe(result => {
      this.abouteMe = result;
    }, error => console.error(error));

  }

}

interface AboutMe {
  title: string;
  content: string;
}