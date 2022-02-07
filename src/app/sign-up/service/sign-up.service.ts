import { SignUp } from './sign-up';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(newUser: SignUp){
    return this.http.post('http://localhost:8080/users', newUser);
  }

}
