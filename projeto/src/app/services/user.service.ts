import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  jsonplaceholder = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  async get() {
    let resposta = await this.http.get(this.jsonplaceholder).toPromise();
    return resposta;
  }

  async getById(id) {
    let resposta = await this.http.get(this.jsonplaceholder+id).toPromise();
    return resposta;
  }

  async post(objeto: user){
    let resposta = await this.http.post(this.jsonplaceholder, objeto).toPromise();
    return resposta;
  }
}
