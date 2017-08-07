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
  repoInfo: string;
  reposCount: any
  @Input() userInfo: any;
  @Output() onAvatar = new EventEmitter<string>();
  constructor(
    private session: SessionService,
    private theApiInfo: ApiInfoService) { }

  ngOnInit() {
    this.apiInfo();
    this.reposInfo();
  }

  getReposCount(arr) {
    let languages = []
    arr.forEach(repo => {
      languages.push(repo.language)
    })
    const filtered_languages = this.getWordCnt(languages)
    console.log(filtered_languages)
    var a = filtered_languages
    var keys = Object.keys(a)

    var values = []

    var values = keys.map(llave => {
      return a[llave]
    })

    console.log(keys)
    console.log(values)
  }

  getWordCnt(arr) {
    var obj = {};

    for (var i = 0, l = arr.length; i < l; i++) {
      var item = arr[i];
      obj[item] = (obj[item] + 1) || 1;
    }

    return obj;
  }

  apiInfo() {
    this.theApiInfo.getGithubUserInfo(this.session.user.account)
      .subscribe(receivedInfo => {
        this.userInfo = receivedInfo
        this.onAvatarLoaded()
        console.log(this.userInfo)
      });
  }

  reposInfo() {
    this.theApiInfo.getGithubReposInfo(this.session.user.account)
      .subscribe(receivedRepos => {
        this.repoInfo = receivedRepos
        this.getReposCount(this.repoInfo)
        console.log(this.repoInfo)
      });
  }

  onAvatarLoaded() {
    this.onAvatar.emit(this.userInfo.avatar_url);
  }

}
