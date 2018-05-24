import { Router, ActivatedRoute } from '@angular/router';
import { SortPipe } from './../sort.pipe';
import { StoreService } from './../storeService.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.model';
import { OrderModule } from 'ngx-order-pipe';


@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.css']
})
export class SortBarComponent implements OnInit {
  hide = false;
  hidee = false;
  filt = false;
  prior = false;
  sortType = '';
  filte = '';
  id;
  onSub = false;
  taskpriority = ['Ultra', 'High', 'Normal', 'Low'];
  employeeList: Employee[];
  @ViewChild('f') sortForm: NgForm;
  constructor(private storeService: StoreService,
     private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.employeeList = this.storeService.employeeList;
  }

  onPrior() {
    if (this.sortForm.value.sort === 'Priority') {
      this.prior = true;
      this.hide = false;
      this.filt = false;
    }
    if (this.sortForm.value.sort === 'Filter') {
      this.filt = true;
      this.prior = false;
      this.hide = false;
    }
    if (this.sortForm.value.sort === 'name') {
      this.hide = true;
      this.filt = false;
      this.prior = false;
    }
    console.log('in onprior' + this.hide + this.filt + this.hide);
  }

  onSubmit() {

    this.onSub = true;
    this.employeeList = this.storeService.employeeList;
    // console.log(this.employeeList);
    this.sortType = this.sortForm.value.sort;
    this.filte = this.sortForm.value.filter;
    // console.log(this.sortType);
   // console.log('hiiiiiiiii');
   // console.log('this is hide' + this.hide);
  }

  goback() {
    this.router.navigate(['home/' + this.id]);
  }

}
