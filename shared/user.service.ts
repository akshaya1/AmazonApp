import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User
  list: User[];
  readonly rootURL = 'http://localhost:56308/api';

  constructor(private http : HttpClient) { }

  postUser(formData: User) {
    return this.http.post(this.rootURL + '/users', formData);
  }
  refreshList() {
    this.http.get(this.rootURL + '/users')
      .toPromise().then(res => this.list = res as User[]);
  }

  putUser(formData: User) {
    return this.http.put(this.rootURL + '/users/' + formData.userId, formData);

  }

  deleteUser(id: number) {
    return this.http.delete(this.rootURL + '/users/' + id);
  
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True'
    });
    console.log('here');
    return this.http.post('http://localhost:56308/token', data, { headers: reqHeader });
  }
  
  getUserClaims() {
    return this.http.get(this.rootURL + '/GetUserClaims');
  }

}
