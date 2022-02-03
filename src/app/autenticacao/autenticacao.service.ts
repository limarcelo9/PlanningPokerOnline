import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string): Observable<any>{
    return this.httpClient.post('http://localhost:8080/users', {
      userName: username,
      password: password
    });
  }
}
