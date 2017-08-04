import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiInfoService } from '../../../services/api-info.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [ApiInfoService]
})
export class GithubComponent implements OnInit {
  @Input() userInfo: any;
  @Output() onAvatar = new EventEmitter<string>();
  constructor(private session: SessionService, private theApiInfo: ApiInfoService) { }

  ngOnInit() {
    this.apiInfo();
  }

  apiInfo() {
    this.theApiInfo.getGithubUserInfo(this.session.user.account)
      .subscribe(receivedInfo => {
        this.userInfo = receivedInfo
        this.onAvatarLoaded()
        console.log(this.userInfo)
      });
  }

  onAvatarLoaded () {
    this.onAvatar.emit(this.userInfo.avatar_url);
  }

}
