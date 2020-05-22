import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {comment} from '../models/comments.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  jsonplaceholder = "https://jsonplaceholder.typicode.com/comments";
  
  constructor(private http: HttpClient) { }

  async get() {
    let resposta = await this.http.get(this.jsonplaceholder).toPromise();
    return resposta;
  }

  async getById(id) {
    let resposta = await this.http.get(this.jsonplaceholder+"?postId="+id).toPromise();
    return resposta;
  }

  async post(objeto: comment){
    let resposta = await this.http.post(this.jsonplaceholder, objeto).toPromise();
    return resposta;
  }
}
