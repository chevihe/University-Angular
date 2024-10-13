import { Topic } from "./topic.model";

export class Course{
    id:number;
    name:string;
    categoryId:number;/////
    count:number;
    startdate:Date;
    syllabus:Topic[];//////
    learn:Learn;//////
    techerId:number;
    img:string;
}
export enum Learn {
    Frontal=1
    , zoom=2
}