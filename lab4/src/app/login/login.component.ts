import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.error = null;
    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.value;
    this.authService.login(formValue.userName, formValue.password)
      .subscribe(
        () => this.onSuccess(),
        () => this.onFailed());
  }

  onSuccess() {
    this.router.navigate(['/']);
  }

  onFailed() {
    this.error = 'Invalid username or password';
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      userName: [ null, Validators.required ],
      password: [ null, Validators.required ]
    });
  }

}
