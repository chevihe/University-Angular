import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from '../course.servies';
import { UserService } from '../../user/user.servies';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryServies } from '../../category.servies';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
  Courses:Course[];
  user:User=null;
  
  constructor(private _courseService: CourseService,private _userService:UserService,
    private _categoryServies:CategoryServies) {
       this._courseService.getAll().subscribe(courses=>{
        this.Courses=courses;
       })
       this._userService.currentUser.subscribe(user => {
        this.user = user;
      });
  }
}
