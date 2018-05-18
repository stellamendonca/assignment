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
  @ViewChild('f') formm: NgForm;
  employeeList: Employee[];
  value = 'chyavan';
  priority = '';
  id: string;
  hide = false;
  username = '';
  password = '';
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


  changehide() {
    this.priority = this.formm.value.sort;
    if (this.priority === 'Priority') {
      this.hide = true;
    }
  }

  onSubmit(formm: NgForm) {
    console.log(formm);
  }
onsearch() {
  this.storeService.employeeList = this.employeeList;
  this.router.navigate(['/search'] );
}

onSort() {
  this.storeService.employeeList = this.employeeList;
  this.router.navigate(['/sort'] );
}

}
