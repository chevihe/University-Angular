import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { AddCourseComponent } from './modules/course/add-course/add-course.component';
import { HomeComponent } from './modules/home/home/home.component';
import { UserService } from './modules/user/user.servies';
import { AppRoutingModule } from './app-routing.module';
import { PageDefulteComponent } from './modules/page-defulte/page-defulte.component';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { CourseService } from './modules/course/course.servies';
import { SingleCourseComponent } from './modules/course/single-course/single-course.component';
import { HeaderComponent } from './modules/header/header.component';
import   { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import {HttpClientModule} from '@angular/common/http';
import { CategoryServies } from './modules/category.servies';


@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent, AddCourseComponent,HomeComponent, 
    PageDefulteComponent, AllCoursesComponent, SingleCourseComponent, HeaderComponent],
  imports: [BrowserModule,BrowserAnimationsModule, 
    FormsModule,ReactiveFormsModule,RouterModule,AppRoutingModule,HttpClientModule,MatIconModule, MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ], 
  providers: [UserService,CourseService,CategoryServies],
  bootstrap: [AppComponent]
})
export class AppModule { }
