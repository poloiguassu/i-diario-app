import { Response, Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ApiService } from './api';
import { CustomHttp } from './custom_http';

@Injectable()
export class AuthService {
  constructor(
    private http: Http,
    private storage: Storage,
    private api: ApiService
  ) {}

  signIn(credential, password){
    const request = this.http.post(this.api.getLoginUrl() , { user: { credentials: credential, password: password } });
    return request.map((response: Response) => {
      return response.json();
    });
  }

  isSignedIn(){
    this.storage.get('user').then(result => {
      return true;
    }).catch(error => {
      return false;
    });
  }

  currentUser(){
    return this.storage.get('user');
  }

  setCurrentUser(user){
    this.storage.set('user', user);
  }

  removeCurrentUser(){
    this.storage.remove('user');
  }
}