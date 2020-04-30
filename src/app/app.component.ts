import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-xml';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  email: string;
  password: string;
  ulogovani: number | RTCDtlsRole | RTCIceRole;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check

  }
  hide()
  {
    this.showModal = false;
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
// convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted)
    {
      this.loginService.getUser(this.email, this.password)
        .subscribe(
          response => {
            localStorage.setItem('jwt', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            const user = JSON.parse(localStorage.getItem('user'));
            this.email = user.email;
            this.ulogovani = user.role;
            alert('Welcome ' + user.email);
            this.showModal = false;
          },
          err => {
            if (err.status === 400) {
              alert('User with given email does not exist');
            } else if (err.status === 406 || err.status === 403) {
              alert('Account not activated');
            }
          });

    }

  }

}
