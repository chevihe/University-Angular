import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class CategoryServies {
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiUrl}/Category`);
  }
    // getCategoryById(id :number){
    //  return this.Categories.find(u=>u.id==id);
    // }

    getCategoryById(id:number): Observable<Category>
    {
       const url = `${environment.apiUrl}/category/${id}`;
       return this.http.get<Category>(url);
    }
     constructor(private http: HttpClient) {
     }
}