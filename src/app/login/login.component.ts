// import { Component, OnInit, ViewChild } from '@angular/core';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
// import { HTTPServerService } from '../httpservice.service';
// import { Employee } from '../employee.model';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   providers : [HTTPServerService]
// })
// export class LoginComponent implements OnInit {
// @ViewChild('data') loginForm: NgForm;
// employeeList: Employee[];
// username = '';
// password = '';

// ngOnInit() {
//   // var x = this.employeeService.getData();
//   // x.snapshotChanges().subscribe(item => {
//   //   this.employeeList = [];
//   //   item.forEach(element => {
//   //     var y = element.payload.toJSON();
//   //     y["$key"] = element.key;
//   //     this.employeeList.push(y as Employee);
//   //     console.log(this.employeeList);
//   //   });
//   // });

//   // console.log(this.employeeList);
// }





// constructor(private employeeService: HTTPServerService ,
//   private service: UserService , private router: Router) {


// }

// onClickSubmit() {
//   this.username = this.loginForm.value.username;
//   this.password = this.loginForm.value.password;
//   console.log(this.username);
//   console.log(this.password);

//   if (this.username === 'chyavan' || this.username === 'chyavan') {
//     this.service.login();
//   }
//   if (this.password === 'stella' || this.password === 'stella') {
//     this.service.login();
//   }
//   if (this.password === 'pallavi' || this.password === 'pallavi') {
//     this.service.login();
//   }
//   this.router.navigate(['/home' + '/' + this.username]);
// }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HTTPServerService } from '../httpservice.service';
import { Employee } from '../employee.model';
import { auth } from '../employee.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HTTPServerService]
})
export class LoginComponent implements OnInit {
  @ViewChild('data') loginForm: NgForm;
  flag = 0;
  employeeList: Employee[];
  incomingAuth: auth[];
  inU: string;
  inP: string;
  public ngOnInit() {
    const x = this.employeeService.getData('chyavan/Tasks');
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);

      });
    });

    // console.log(this.employeeList);
  }


  // tslint:disable-next-line:member-ordering
  username = '';
  // tslint:disable-next-line:member-ordering
  password = '';


  constructor(private employeeService: HTTPServerService,
    private service: UserService, private router: Router,
   ) {


  }

  onClickSubmit() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // console.log(this.username);
    // console.log(this.password);

    // console.log(this.username + '/Tasks');

    const x = this.employeeService.getData(this.username + '/Auth');
    x.snapshotChanges().subscribe(item => {
      this.incomingAuth = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.incomingAuth.push(y as auth);

      });

      console.log('00000000000');
      // this.inU = this.incomingAuth[0].taskname;
      // this.inP = this.incomingAuth[0].taskdetail;
      // console.log(this.inU);
      // console.log(this.inP);
      console.log('00000000000');

      if (this.username === 'admin' && this.password === 'admin123') {
        this.service.login();
        this.router.navigate(['/admin']);
        console.log('admin');

        if (this.flag === 1) {
        alert(' Check login credentials');
        }

      } if (this.incomingAuth[0].username === this.username && this.password === this.incomingAuth[0].password) {
        this.flag = 1;
        this.service.login();
        alert('Successfully Logged In');
        this.router.navigate(['/home' + '/' + this.username]);
        console.log('a');
      }
    });
    //   console.log(this.inU);
    //   console.log(this.inP);
    //   if (this.inU === this.username) {
    //     console.log('true2');
    //     console.log('00000000000');
    //   }
    //   if (this.username === 'chyavan' || this.password === 'chyavan') {
    //     this.service.login();
    //   }

    //   if (this.password === 'stella' || this.password === 'stella') {
    //     this.service.login();
    //   }
    //   if (this.password === 'pallavi' || this.password === 'pallavi') {
    //     this.service.login();
    //   }
    //   this.router.navigate(['/home' + '/' + this.username]);
    // }
  }
}
