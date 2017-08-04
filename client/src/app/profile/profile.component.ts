import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userAvatar: string
  constructor(private session: SessionService, private router: Router) {
    this.userAvatar = ""
  }
  ngOnInit() {}

  loadsAvatar(imgRoute){
    this.userAvatar = imgRoute
  }
}
