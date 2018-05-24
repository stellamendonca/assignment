import { Employee } from './../employee.model';
import { HTTPServerService } from './../httpservice.service';
import { StoreService } from './../storeService.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent {
  index = null;
  id: string;
  taskname: string;
  employeeList: Employee[];
  key;
  constructor(private senddata: HTTPServerService,
    private route: ActivatedRoute, private storeService: StoreService,
    private router: Router) {
    this.route.params.subscribe(params => this.id = params.id);
    console.log(this.id);
    this.route.params.subscribe(params => this.index = params.index);
    console.log(this.index);
    this.route.params.subscribe(params => this.key = params.key);
    console.log(this.key);
    if (this.index != null) {
      this.taskname = this.storeService.employeeList[this.index].taskname;
      this.taskdetail = this.storeService.employeeList[this.index].taskdetail;
      this.prior = this.storeService.employeeList[this.index].priority;
      this.startDate = this.storeService.employeeList[this.index].startDate;
      this.duedate = this.storeService.employeeList[this.index].duedate;
      this.taskassignedby = this.storeService.employeeList[this.index].taskassignedby;
    }
  }
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  taskpriority = ['Ultra', 'High', 'Normal', 'Low'];
  taskdetail = '';
  prior;
  startDate;
  duedate;
  taskassignedby;
  dateAlert = false;
  user = {
    taskname: '',
    taskdetail: '',
    taskassignedby: '',
    startDate: '',
    duedate: '',
    note: '',
    priority: '',
    status: '',
    check: false,
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // } username

  onSubmit() {

    if (this.index === undefined) {
      this.submitted = true;
      this.user.taskname = this.signupForm.value.userData.taskname;
      this.user.taskdetail = this.signupForm.value.userData.taskdetail;
      this.user.taskassignedby = this.signupForm.value.taskassignedby;
      this.user.priority = this.signupForm.value.prior;
      this.user.startDate = this.signupForm.value.startDate;
      this.user.duedate = this.signupForm.value.duedate;
      this.user.check = false;
      this.senddata.insertEmployee(this.user, this.id);
      this.signupForm.reset();
      // this.user.taskname = '';
      // this.user.taskdetail = '';
      // this.user.priority = '';
      // insertEmployee
    } else {
      this.user.taskname = this.signupForm.value.userData.taskname;
      this.user.taskdetail = this.signupForm.value.userData.taskdetail;
      this.user.taskassignedby = this.signupForm.value.userData.taskassignedby;
      this.user.priority = this.signupForm.value.prior;
      this.user.startDate = this.signupForm.value.startDate;
      this.user.duedate = this.signupForm.value.duedate;
      this.user.check = false;
      this.senddata.updateEmployee(this.user, this.key, this.id);
      this.signupForm.reset();
    }
  }


  onDate() {
    if (this.startDate > this.duedate) {
      this.dateAlert = true;
    } else {
      this.dateAlert = false;
    }
  }

  goback() {
    this.router.navigate(['home/'+this.id]);
  }


}
