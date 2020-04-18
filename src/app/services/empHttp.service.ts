import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class EmpHttpService{

      
    urlGetAll:string="http://demo.itvidya.in/emps.php";
    urlPost:string="http://demo.itvidya.in/add-emp-post.php";

    constructor(private http:HttpClient){} 

    getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.urlGetAll);
    }

    addEmp(emp:Employee):Observable<{status:string,message:string}>{
            const formData=new FormData();
            formData.append("empid",emp.empid.toString());
            formData.append("name",emp.name);
            formData.append("city",emp.city);
            formData.append("salary",emp.salary.toString());
            
            return this.http.post<{status:string,message:string}>(this.urlPost,formData);
    }

}