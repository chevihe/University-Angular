import { Component } from '@angular/core';
import { UserService } from '../../user/user.servies';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user:User;
  constructor(private _userService :UserService) {
    this._userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
  selectedIcon: string;

  onIconSelected(icon: string) {
    this.selectedIcon = icon;
    console.log('Selected icon:', icon);
  }
}
