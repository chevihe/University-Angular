import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user.servies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _userService:UserService,private _router:Router) {
    this._userService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  };
  currentUser: User = {id:0,name:this._userService.getUserName(),email:"",password:this._userService.getUserPassword(),address:""};
  userForm: FormGroup=new FormGroup({
    "id": new FormControl({ value: this.currentUser?.id, disabled: true }),
    "name": new FormControl(this.currentUser?.name, [Validators.required, Validators.minLength(3)]),
    "address": new FormControl(this.currentUser?.address, Validators.required),
    "email": new FormControl(this.currentUser?.email, [Validators.required, Validators.email]),
    "password": new FormControl(this.currentUser?.password, [Validators.required, Validators.minLength(8)])
  });

  saveUser(){
    this.userForm.value.id=0;
    this.currentUser=this.userForm.value;
    this._userService.register(this.currentUser)
    .subscribe(
      (user: User) => {
          console.log('משתמש נוצר בהצלחה:', user);
          this._userService.changeUser(user);
          this._router.navigate(["/home"]);
        },
        (error) => {
          console.error('שגיאה ביצירת המשתמש:', error);
          alert("שם המשתמש קיים כבר")
        }
     );}
}
