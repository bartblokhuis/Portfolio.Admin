import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/User';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  amountOfMessages: number = 7;
  user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((user) => {
      console.log(user);
    });
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
