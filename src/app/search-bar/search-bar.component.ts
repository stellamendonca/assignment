import { UserService } from './../user.service';
import { AuthloginGuard } from './../login/authlogin.guard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StoreService } from '../storeService.service';
import { Employee } from '../employee.model';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  employeeListt = [];
  hide: boolean;
  employeeList: Employee[];
  i;
  hidee = false;
  name = '';
@ViewChild('fo') formm: NgForm;

  priority: any;
  constructor(private route: Router,
     private authservice: UserService,
      private storeService: StoreService) { }

  ngOnInit() {
  }
  public onAddTask() {
    this.route.navigate(['add-edit-task']);
  }

  public onSignout() {
    this.authservice.logout();
  }

  public onSubmit(formm: NgForm) {
    console.log(formm);
  }
  public changehide() {
    // this.priority = this.formm.value.sort;
    // if (this.priority === 'Priority') {
      this.hide = true;
      this.name = this.formm.value.search;
      this.employeeList = this.storeService.employeeList;
      console.log(this.employeeList);
      for (this.i = 0; this.i < this.employeeList.length; this.i++ ) {
        this.hidee = true;
        if ( this.name  === this.employeeList[this.i].taskname) {
console.log('hi');
          this.employeeListt.push(this.employeeList[this.i]) ;
          console.log(this.employeeListt);
        }
     }
    }

}

