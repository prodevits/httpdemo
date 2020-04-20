import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class EmpRestService{
    constructor(private http:HttpClient){}
    baseUrl:string="http://mean.itvidya.in/api/"
    restApiAllEmployee:string=`${this.baseUrl}employee`;
    restApiDeleteEmployee:string=`${this.baseUrl}employee/`;
    

  getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.restApiAllEmployee);
    }

    delete(id:string):Observable<{status:string,message:string}>{
        const url=this.restApiDeleteEmployee+id;
        console.log(this.restApiDeleteEmployee);
        
        return this.http.delete<{status:string,message:string}>(url);
    }

}