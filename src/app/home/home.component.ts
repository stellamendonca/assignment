import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HTTPServerService } from '../httpservice.service';
import { Employee } from '../employee.model';
import { StoreService } from '../storeService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HTTPServerService]
})
export class HomeComponent implements OnInit {

  @ViewChild('fo') formmm: NgForm;
  employeeList: Employee[];
  employeeListt = [];
  value = '';
  name = '';
  i;
  key;
  priority = '';
  taskpriority = ['Ultra', 'High', 'Normal', 'Low'];
  id: string;

  hide = true;
  username = '';
  password = '';
  hidee = false;
  ngOnInit() {
    const x = this.employeeService.getData(this.id);
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
        console.log(this.employeeList);
      });
    });


  }




  constructor(private employeeService: HTTPServerService,
    private service: UserService, private router: Router,
    private route: ActivatedRoute, private storeService: StoreService) {


    this.route.params.subscribe(params => this.id = params.id);
    console.log(this.id);

  }





  // onClickSubmit(){
  //   this.username=this.loginForm.value.username;
  //   this.password=this.loginForm.value.password;
  //   console.log(this.username);
  //   console.log(this.password);

  //   if (this.username === 'user1')
  //   if (this.password === 'user1')
  //   this.service.login();
  //   this.router.navigate(['/home']);
  // }

  onNewTask() {
    this.router.navigate(['/addedit' + '/' + this.id]);
  }


  // changehide() {
  //   this.priority = this.formm.value.sort;
  //   if (this.priority === 'Priority') {
  //     this.hide = true;
  //   }
  // }

  onSubmit(formm: NgForm) {
    console.log(formm);
  }
onsearch() {
  this.hide = false;
  this.storeService.employeeList = this.employeeList;

  this.name = this.formmm.value.search;
  // changehide() {
    //   this.priority = this.formm.value.sort;
    //   if (this.priority === 'Priority') {
    //     this.hide = true;
    //   }
    // }

  console.log(this.formmm);
  console.log(this.name);
  for (this.i = 0; this.i < this.employeeList.length; this.i++ ) {

    if ( this.employeeList[this.i].taskname.includes(this.name)) {
console.log('hi');
this.hidee = true;
      this.employeeListt.push(this.employeeList[this.i]) ;
      console.log(this.employeeListt);
}
  }
}



onSort() {
  this.storeService.employeeList = this.employeeList;
  this.router.navigate(['/sort'] );
}

onEdit(i) {
  this.key = this.employeeList[i].$key;
  this.storeService.employeeList = this.employeeList;
this.router.navigate(['/addedit' + '/' + this.id + '/' + i + '/' + this.key]);

}

onDelete(i) {

  this.key = this.employeeList[i].$key;
  this.employeeService.deleteEmployee(this.key);
}

ondisp(i) {
  this.storeService.employeeList = this.employeeList;
  this.router.navigate(['/display' + '/' + i] );
}

}
