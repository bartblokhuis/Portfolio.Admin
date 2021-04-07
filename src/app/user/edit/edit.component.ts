import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserDetails } from 'src/app/data/User';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  detailsForm: FormGroup;
  changePasswordForm: FormGroup;
  userDetails: UserDetails = {username: '', email: ''};

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { 

  }

  ngOnInit(): void {

    this.detailsForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.changePasswordForm = this.formBuilder.group({
      oldPassword: [''],
      newPassword: [],
      confirmNewPassword: []
    });

    this.authenticationService.getUserDetails().subscribe((details) => {
      this.detailsForm.controls.username.setValue(details.username);
      this.detailsForm.controls.email.setValue(details.email);
    });
  }

}
