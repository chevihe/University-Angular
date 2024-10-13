import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Course, Learn } from "src/app/models/course.model";
import { environment } from "src/environments/environment";
@Injectable()
export class CourseService {

id:number=5;

// Courses:Course[]=[
//     {id:0,name:"תפור עליך",count:9,categoryId:1,startdate:new Date(),syllabus:[{name:"צילום ביתי",icon:"home"},{name:"צילומי ספר",icon:"book"}],learn:Learn.zoom,techerId:2,img:"assets/courses-images/literature.jpg"},
//     {id:1,name:"מצלמים ונהנים",count:9,categoryId:1,startdate:new Date(),syllabus:[],learn:Learn.zoom,techerId:2,img:"assets/courses-images/camera.jpg"},
//     {id:2,name:"אנגולר",count:9,categoryId:1,startdate:new Date(),syllabus:[],learn:Learn.zoom,techerId:1,img:"assets/courses-images/computers.png"}
// ] 
courseToUpdate:number=null;
 
update(course:Course)
{
    this.setCourseToUpdate(null);
}
setCourseToUpdate(id:number){
    this.courseToUpdate=id;
}

getCourseToUpdate():number{
    return this.courseToUpdate;
}

getAll():Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.apiUrl}/course`);
  }



    add(course:Course):void{
       if(this.courseToUpdate){
          this.http.put<Course>(`${environment.apiUrl}/course/${this.courseToUpdate}`, course).subscribe(
            ()=>{
                this.courseToUpdate=null;
                alert("הקורס התעדכן בהצלחה")
                this._router.navigate(["/all-courses"]);
            }
        );
        }
        else{
        this.http.post<Course>(`${environment.apiUrl}/course`, course).
        subscribe(
            ()=>{
                alert("הקורס הוסף בהצלחה")
                this._router.navigate(["/all-courses"]);
            }
        );
        }
    }

    updateId():Observable<Course|any>{
    if(!this.courseToUpdate)
       return null;
    return this.http.get<Course>(`${environment.apiUrl}/course/${this.courseToUpdate}`);
    }

  
    constructor(private http: HttpClient,
        private _router: Router) {
    }
}













