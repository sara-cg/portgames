import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  error: any;
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

  logout(){
    this.session.logout()
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      )
    this.router.navigate(['/login'])
  }
}
