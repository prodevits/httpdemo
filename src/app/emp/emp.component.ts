import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmpHttpService } from '../services/empHttp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  @ViewChild("empForm", { static: false }) empForm: NgForm;
  message:string;
  status:string;
  empList: Employee[];
  spin=true;
  constructor(private httpService: EmpHttpService) { }
  ngOnInit() {
    this.loadEmps();
  }

  loadEmps(){
    this.httpService.getAll().subscribe((data) => {
      this.empList = data;
      this.empList.sort((a, b) => a.empid - b.empid);
      this.spin=false;
    });
  }

  onSubmit() {
    this.spin=true;
    this.httpService.addEmp(this.empForm.value).subscribe((response) => {
      console.log(response);
      this.message=response.message;
      this.status=response.status;
      if(this.status=='success'){
        this.loadEmps();
        this.empForm.reset();
      }
      this.spin=false;
    });
    
  }

  closeAlert(){
    this.message=undefined;
  }
}
