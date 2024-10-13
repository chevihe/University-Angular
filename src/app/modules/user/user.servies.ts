import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

// id:number=5;

private myUserSource = new BehaviorSubject<User>(null);
currentUser = this.myUserSource.asObservable();

 userName:string=null;
 userPassword:string=null;


    changeUser(newUser: User) {
        this.myUserSource.next(newUser);
    }

    getUserById(id:number): Observable<User>
    {
      const url = `${environment.apiUrl}/user/${id}`;
      return this.http.get<User>(url);
            //  .pipe(
            //    map(user => user.name)
            //  );
    }
    // register(user:User):User{
    // //    user.id=this.id++;
    //    if(this.Users.find(u=>u.name==user.name))
    //    {
    //     this.CurrentUser=null;
    //     return null;
    //    }
    //    this.Users.push(user);
    //    this.CurrentUser=user;
    //    return user;
    // }


    register(user:User): Observable<User | any> {
      return this.http.post<User>(`${environment.apiUrl}/user`, user);
    }

    // login(name:string,password:string):number{
    //    this.CurrentUser= this.Users.find(e=>e.name==name&&e.password==password)
    //    if(this.CurrentUser)
    //      return 2;
    //     else if(this.Users.find(e=>e.name==name))
    //       return 1;
    //     this.userName=name;
    //     return 0;
    // }

    authenticate(name: string, password: string): Observable<User | any> {
        return this.http.get<User>(`${environment.apiUrl}/user`, {
          params: { name, password }
        });
      }
    
    // getCurrentUser(): Promise<User> {
    //     return new Promise((res, rej) => {
    //         res(this.CurrentUser);
    //     })
    // }

    getUserName(){
        return this.userName;
    }

    getUserPassword(){
        return this.userPassword;
    }

    setUserNamePassword(name: string, password: string){
        this.userName=name;
        this.userPassword=password;
    }

    constructor(private http: HttpClient) {
    }
}













