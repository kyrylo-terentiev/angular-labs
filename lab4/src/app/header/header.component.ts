import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { AuthService } from '../core/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navBarTmpl: TemplateRef<any>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
