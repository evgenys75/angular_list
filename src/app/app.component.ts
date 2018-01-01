import { Component } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'test_app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[UsersService]
})
export class AppComponent {

  users=[];

  constructor(private userService:UsersService){

  }

  ngOnInit(){

      this.users=this.userService.users

    }
}
