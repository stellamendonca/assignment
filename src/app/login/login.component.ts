import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HTTPServerService } from '../httpservice.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[HTTPServerService]
})
export class LoginComponent implements OnInit {
@ViewChild('data') loginForm:NgForm;
employeeList: Employee[];

ngOnInit() {
  // var x = this.employeeService.getData();
  // x.snapshotChanges().subscribe(item => {
  //   this.employeeList = [];
  //   item.forEach(element => {
  //     var y = element.payload.toJSON();
  //     y["$key"] = element.key;
  //     this.employeeList.push(y as Employee);
  //     console.log(this.employeeList);
  //   });
  // }); 

  // console.log(this.employeeList);
}


username='';
password=''; 


constructor(private employeeService : HTTPServerService , 
  private service :UserService , private router : Router) {


}
 
onClickSubmit(){
  this.username=this.loginForm.value.username;
  this.password=this.loginForm.value.password;
  console.log(this.username);
  console.log(this.password);

  if (this.username === 'chyavan' || this.username === 'chyavan'){
    this.service.login();
  }
  if (this.password === 'stella' || this.password === 'stella'){
    this.service.login();
  }
  if (this.password === 'pallavi' || this.password === 'pallavi'){
    this.service.login();
  }
  this.router.navigate(['/home' + '/'+this.username]);
}
}