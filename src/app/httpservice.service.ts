import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Employee} from './employee.model';

@Injectable()
export class HTTPServerService{
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) {
}
  
  getData(key){
    this.employeeList = this.firebase.list(key);
    return this.employeeList;
  }
     
  insertEmployee(employee : Employee , key)
  {
    this.employeeList = this.firebase.list(key);
    this.employeeList.push(employee);
  }
 
  // updateEmployee(employee : Employee){
  //   this.employeeList.update(employee.$key,
  //     {
  //       taskname: employee.taskname,
  //       taskdetail: employee.taskdetail,
  //       priority: employee.priority
  //     });
  // }
 
  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }
 }