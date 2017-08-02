import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  error: string;
  email: string;
  name: string;
  rol: string;
  account: string;
  password: string;
  user: object; //Refactor
  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {}

  signup() {
    console.log(this.rol)
    console.log(this.account)
    this.session.signup(this.email, this.name, this.rol, this.account, this.password)
      .subscribe(
      (user) => console.log(user),
      (err) => this.error = err
      );
      this.router.navigate(['/main']);
  }
}
