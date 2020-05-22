import { Component, OnInit } from '@angular/core';
import { post } from '../models/posts.model';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  post = {} as post;;
  posts: post[];
  usuarios: user[];

  constructor(private postService: PostService, private userService: UserService) { }

  async ngOnInit(){
    await this.postService.get().then((objetos: post[]) => this.posts = objetos).catch();
    await this.userService.get().then((objetos: user[]) => this.usuarios = objetos).catch();
    for (let index = 0; index < this.posts.length; index++) {
      this.posts[index].exibirComentario = false;
    }
  }

  onSubmit(postFormulario: post) {
    let retorno = this.postService.post(postFormulario);
    console.log(retorno);
  }

  exibicaodeComentarios(id) {
    for (let index = 0; index < this.posts.length; index++) {
      if(this.posts[index].id == id) {
        if (this.posts[index].exibirComentario) {
          this.posts[index].exibirComentario = false;
        } else {
          this.posts[index].exibirComentario = true;
        }
      }
    }
  }
}
