import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
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
  password: string;
  constructor(private session: SessionService) { }
  ngOnInit() {
  }

  signup() {
    this.session.signup(this.name,this.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }
}
