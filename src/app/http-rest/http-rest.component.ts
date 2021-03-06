import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmpRestService } from '../services/empRest.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http-rest',
  templateUrl: './http-rest.component.html',
  styleUrls: ['./http-rest.component.css']
})
export class HttpRestComponent implements OnInit {

  @ViewChild("empForm", { static: false }) empForm: NgForm;
  message: string;
  status: string;
  empList: Employee[];
  spin = true;
  editMode = false;
  constructor(private restService: EmpRestService) { }
  ngOnInit() {
    this.loadEmps();
  }

  loadEmps() {
    this.restService.getAll().subscribe((data) => {
      this.empList = data;
      this.empList.sort((a, b) => a.empid - b.empid);
      this.spin = false;
    });
  }

  // onSubmit() {
  //   this.spin = true;
  //   if (this.editMode) {
  //     this.restService.updateEmp(this.empForm.value).subscribe((response) => {
  //       console.log(response);
  //       this.message = response.message;
  //       this.status = response.status;
  //       if (this.status == 'success') {
  //         this.loadEmps();
  //         this.empForm.reset();
  //       }
  //       this.spin = false;
  //       this.editMode = false;
  //     });
  //   } else {
  //     this.restService.addEmp(this.empForm.value).subscribe((response) => {
  //       console.log(response);
  //       this.message = response.message;
  //       this.status = response.status;
  //       if (this.status == 'success') {
  //         this.loadEmps();
  //         this.empForm.reset();
  //       }
  //       this.spin = false;
  //     });
  //   }

  // }

  
  onSubmit() {
    this.spin = true;
    if (this.editMode) {
          this.restService.updateEmp(this.empForm.value).subscribe((response) => {
            console.log(response);
            this.message = response.message;
            this.status = response.status;
            if (this.status == 'success') {
              this.loadEmps();
              this.empForm.reset();
            }
            this.spin = false;
            this.editMode = false;
          });
        } else {
      this.restService.addEmp(this.empForm.value).subscribe((response) => {
        console.log(response);
        this.message = response.message;
        this.status = response.status;
        if (this.status == 'success') {
          this.loadEmps();
          this.empForm.reset();
        }
        this.spin = false;
      },(errorResponse)=>{
        this.message = errorResponse.error.message;
        this.status = errorResponse.error.status;  
        this.spin = false;   
      });
    }
    

  }

  closeAlert() {
    this.message = undefined;
  }

  remove(id: string) {
    console.log("Removing id=" + id);
    this.spin = true;
    this.restService.delete(id).subscribe((response) => {
      this.message = response.message;
      this.status = response.status;

      if (response.status == 'success') {
        this.loadEmps();
      }
      this.spin = false;
    });
  }
  edit(id: number) {
    this.editMode = true;
    const emp = this.empList.find((e) => e.empid == id);
    this.empForm.setValue(emp);


  }

  cancelUpdate(){
    this.editMode=false;
    this.empForm.reset();
  }
}
