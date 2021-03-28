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
  private baseUrl : string

  aboutMeForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.http = http;
    this.baseUrl = baseUrl;

    http.get<AboutMe>(baseUrl + 'AboutMe').subscribe(result => {
      this.aboutMeForm.controls.title.setValue(result.title);
      this.aboutMeForm.controls.content.setValue(result.content);

    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  saveAboutMe(): void {
    this.http.post<AboutMe>(this.baseUrl + 'AboutMe', this.aboutMeForm.value).subscribe(result => {
      this.abouteMe = result;
    }, error => console.error(error));

  }

}

interface AboutMe {
  title: string;
  content: string;
}