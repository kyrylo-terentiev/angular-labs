import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../model/user.model';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild('profile', { static: false })
  profileComponent: ProfileComponent;

  userName: string;
  user: User;
  isLoggedIn = true;
  articles: any[] = [
    { name: 'Article1', createdOn: new Date() },
    { name: 'Article2', createdOn: new Date(2019, 12, 9) },
    { name: 'Article2', createdOn: new Date(2018, 9, 23) }
  ];

  constructor() { }

  ngOnInit() {
    this.userName = this.getUserName();
    this.user = new User(this.userName, 22);
  }

  getUserName(): string {
    return 'Roman';
  }

  addUser(name: string) {
    this.userName = name;
  }

  onLogout(isLoggedOut: boolean) {
    alert('User has been logged out.');
    this.isLoggedIn = false;
  }
}
