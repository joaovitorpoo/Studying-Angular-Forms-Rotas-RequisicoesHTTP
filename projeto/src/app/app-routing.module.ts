import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [{path: 'user', component: UserComponent},{path: 'post', component: PostComponent}, {path: 'comment', component: CommentComponent}, { path: '', redirectTo: '/user', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
