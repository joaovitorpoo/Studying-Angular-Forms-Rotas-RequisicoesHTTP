import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { comment } from '../models/comments.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() idPost;

  comentario: comment;
  comentarios: comment[];
  todosComentarios: comment[];

  constructor(private commentService: CommentService) { }

  async ngOnInit(){
    await this.commentService.getById(this.idPost).then((objetos: comment[]) => this.comentarios = objetos).catch();
    await this.commentService.get().then((objetos: comment[]) => this.todosComentarios = objetos).catch();
  }

}
