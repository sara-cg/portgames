import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;
  email: string;
  password: string;
  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
  }

  login() {
    this.session.login(this.email, this.password)
      .subscribe(
      (user) => console.log(user),
      (err) => this.error = err
      );
    this.router.navigate(['/main']);
  }

  signup() {
    this.router.navigate(['/signup']);  // <!-- Programmatically navigate to home
  }
}
