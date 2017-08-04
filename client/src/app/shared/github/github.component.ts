import { Component, OnInit } from '@angular/core';
import { ApiInfoService } from '../../../services/api-info.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [ApiInfoService]
})
export class GithubComponent implements OnInit {
  userInfo: any
  constructor(private session: SessionService, private theApiInfo: ApiInfoService) { }

  ngOnInit() {
    this.apiInfo();
  }

  apiInfo() {
    this.theApiInfo.getGithubUserInfo(this.session.user.account)
      .subscribe(receivedInfo => {
        this.userInfo = receivedInfo
        console.log(this.userInfo)
    });
  }

}
