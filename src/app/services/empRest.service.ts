import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmpRestService {
    constructor(private http: HttpClient) { }
    baseUrl: string = "http://mean.itvidya.in/api/"
    restApiEmployee: string = `${this.baseUrl}employee`;


    getAll(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.restApiEmployee);
    }

    delete(id: string): Observable<{ status: string, message: string }> {
        const url = this.restApiEmployee +"/"+ id;

        return this.http.delete<{ status: string, message: string }>(url);
    }

    addEmp(emp:Employee):Observable<{status:string,message:string}>{
        // const formData=new FormData();
        // formData.append("empid",emp.empid.toString());
        // formData.append("name",emp.name);
        // formData.append("city",emp.city);
        // formData.append("salary",emp.salary.toString());
        
        return this.http.post<{status:string,message:string}>(this.restApiEmployee,emp);
}

    updateEmp(emp:Employee):Observable<{status:string,message:string}>{
        // const formData=new FormData();
        // formData.append("empid",emp.empid.toString());
        // formData.append("name",emp.name);
        // formData.append("city",emp.city);
        // formData.append("salary",emp.salary.toString());
        const url = this.restApiEmployee +"/"+ emp.empid;
        return this.http.put<{status:string,message:string}>(url,emp);
}


}