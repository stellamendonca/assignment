import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee.model';
import { auth } from './employee.model';

@Injectable()
export class HTTPServerService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) {
  }

  getData(key) {
    this.employeeList = this.firebase.list(key);
    return this.employeeList;
  }

  createEmployee(employee: auth, key) {
    this.employeeList = this.firebase.list(key);
    this.employeeList.push(employee);
    }

  insertEmployee(employee: Employee, key) {
    this.employeeList = this.firebase.list(key);
    this.employeeList.push(employee);
  }

  updateEmployee(employee: Employee, key, name) {
    this.employeeList = this.firebase.list(name);
    console.log('hoiiiiiii');
    console.log(employee);
    console.log(key);
    console.log(name);
    this.employeeList.update(key,
      {
        taskname: employee.taskname,
        taskdetail: employee.taskdetail,
        priority: employee.priority,
        startDate: employee.startDate,
        duedate : employee.duedate,
        taskassignedby: employee.taskassignedby,
        check : employee.check
      });
  }

  deleteEmployee($key) {
    this.employeeList.remove($key);
  }
}
