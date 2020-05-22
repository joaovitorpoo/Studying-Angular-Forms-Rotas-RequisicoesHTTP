import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: user;
  usuarios: user[];

  constructor(private userService: UserService) { }

  async ngOnInit() {
    await this.userService.get().then((objetos: user[]) => this.usuarios = objetos).catch();
  }

}
