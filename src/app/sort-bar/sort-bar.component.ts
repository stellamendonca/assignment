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
  sortType = '';
  priority = '';
  employeeList: Employee[];
  @ViewChild('f') sortForm: NgForm;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  onPrior() {
    if (this.sortForm.value.sort === 'Priority') {
      this.hide = true;
    }
  }

  onSubmit() {
    this.employeeList = this.storeService.employeeList;
    console.log(this.employeeList);
    this.sortType = this.sortForm.value.sort;
    this.priority = this.sortForm.value.filter;
    console.log(this.sortType);
  }

}
