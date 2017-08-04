import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiInfoService {

  constructor(private http: Http) { }

  getGithubUserInfo(account) {
    return this.http.get(`https://api.github.com/users/${account}`)
      .map((res: Response) => console.log(res.json()));
  }

}
