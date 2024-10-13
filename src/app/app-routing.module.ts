import { NgModule } from "@angular/core";
import { LoginComponent } from "./modules/user/login/login.component";
import { RegisterComponent } from "./modules/user/register/register.component";
import { HomeComponent } from "./modules/home/home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { PageDefulteComponent } from "./modules/page-defulte/page-defulte.component";
import { AddCourseComponent } from "./modules/course/add-course/add-course.component";
import { AllCoursesComponent } from "./modules/course/all-courses/all-courses.component";

const ROUTES:Routes=[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"home",component:HomeComponent},
    {path:"add",component:AddCourseComponent},
    {path:"update/:id",component:AddCourseComponent},
    {path:"all-courses",component:AllCoursesComponent},
    {path:"",component:RegisterComponent},
    {path:"**",component:PageDefulteComponent}
  ]
  @NgModule({
    imports: [RouterModule.forRoot(ROUTES)], 
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


  