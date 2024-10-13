import { Component } from '@angular/core';
import { UserService } from '../user/user.servies';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
user:User;
constructor(private _userService:UserService) {
  this._userService.currentUser.subscribe(user => {
    this.user = user;
  });
//  this.user = _userServies.getUser();
}
}
