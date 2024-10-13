import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Course } from 'src/app/models/course.model';
import { UserService } from '../../user/user.servies';
import { CourseService } from '../course.servies';
import { CategoryServies } from '../../category.servies';
import { ICONS } from 'src/app/shared/icons';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  categoryList: Category[] ;
  icons: string[]=ICONS;
  syllabusFormArray = new FormArray<FormGroup>([], Validators.required);
  course: Course=null;
  courseForm: FormGroup ;

  constructor(
    private _courseService: CourseService,
    private _userService: UserService,
    private _categoryService: CategoryServies
  ) {
    // Initialize form
    this.courseForm = new FormGroup({
    "id": new FormControl({value: 0, disabled: true }),
    "name": new FormControl('', [Validators.required, Validators.minLength(3)]),
    "categoryId": new FormControl(null, [Validators.required]),
    "count": new FormControl(null, [Validators.required]),
    "startdate": new FormControl('', [Validators.required]),
    "syllabus": this.syllabusFormArray,
    "learn": new FormControl(null, [Validators.required]),
    "techerId": new FormControl(null, [Validators.required]),
    "img": new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this._courseService.courseToUpdate) {
      this._courseService.updateId().subscribe(course => {
        this.course = course;
        this.initializeForm(course);
      });
    }

    this._categoryService.getCategories().subscribe(category => {
      this.categoryList = category;
    });
  }

  initializeForm(course: Course) {
    this.courseForm.patchValue({
      id: course.id || 0,
      name: course.name || '',
      categoryId: course.categoryId || null,
      count: course.count || null,
      startdate: course.startdate || '',
      learn: course.learn || null,
      teacherId: course.techerId || null,
      img: course.img || '',
    });

    this.syllabusFormArray.clear();
    course.syllabus?.forEach(topic => {
      this.addSyllabusTopic(topic.name, topic.icon);
    });
  }
  
  selectIcon(icon: string) {
    this.courseForm.get('icon').setValue(icon);
  }
  saveCourse() {
    this.courseForm.value.id = 0;
     this._userService.currentUser.subscribe(user => {
      if (user) {
        this.courseForm.value.techerId = user.id
      }
  });
    this.courseForm.value.learn = parseInt(this.courseForm.value.learn); 
    const syllabus = this.syllabusFormArray.controls.map(topicFormGroup => ({
      name: topicFormGroup.get('name')?.value,
      icon: topicFormGroup.get('icon')?.value
    }));

    this.courseForm.value.syllabus = syllabus;

    alert(JSON.stringify(this.courseForm.value, null, 2));
    this.course = this.courseForm.value;
    this._courseService.add(this.course);
    
  }

  addSyllabusTopic(name = '', icon = '') {
    const topicFormGroup = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      icon: new FormControl(icon)
    });
    this.syllabusFormArray.push(topicFormGroup);
  }

  removeSyllabusTopic(index: number) {
    this.syllabusFormArray.removeAt(index);
  }
 
}

