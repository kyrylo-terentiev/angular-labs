import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './core/api/auth.service';
import { User } from './model/user.model';
import { UsersService } from './core/api/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  public constructor(private titleService: Title, private authService: AuthService, private usersService: UsersService) {
    this.titleService.setTitle( 'Lab4' );
  }

  ngOnInit() {
    this.usersService.currentUser
      .subscribe((user: User) => console.log('currentUser from API', user));
  }



}
