import { Component, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from '../course.servies';
import { UserService } from '../../user/user.servies';

import { User } from 'src/app/models/user.model';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';
import { CategoryServies } from '../../category.servies';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent {

// @Input()
// category:Category;

teacherName:string;
categoryIcon:string;
@Input()
course?:Course;
@Input()
user:number;

update(courseId:number){
  this._courseService.setCourseToUpdate(courseId);
  this._router.navigate(["/add"]);
}
constructor( 
  private _userService: UserService,private _categoryServies:CategoryServies,
  private _courseService: CourseService, private _router:Router) {
}
ngOnInit(){
  this._userService.getUserById(this.course?.techerId).subscribe(teacher=>
    this.teacherName = teacher.name
 );
 this._categoryServies.getCategoryById(this.course?.categoryId).subscribe(category=>
  this.categoryIcon = category.icon
);
}
}
