import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.servies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
     username:string="";
     password:string="";
     errorMessage: string = '';

     registerForm: FormGroup=new FormGroup({
        "name": new FormControl(this.username, [Validators.required, Validators.minLength(3)]),
        "password": new FormControl(this.password, [Validators.required, Validators.minLength(8)])
      });

      constructor(private _userService:UserService,private _router:Router) {
      };

      saveUser(){
        this.username=this.registerForm.value.name;
        this.password=this.registerForm.value.password;
        this.errorMessage = '';
        this._userService.authenticate(this.username, this.password)
        .subscribe(
        (response) => {
          this._userService.changeUser(response);
          this._router.navigate(["/home"]);
          console.log('Authentication successful:', response);
        },
        (error) => {
          if (error.status === 400) {
            alert("סיסמא שגויה נסה שוב");
          }
          else{
            this._userService.setUserNamePassword(this.username, this.password);
            this._router.navigate(["/login"]);
          }
            
          console.error('Authentication error:', error);
          this.errorMessage = error.error || 'An error occurred.';
        }
      );}
}