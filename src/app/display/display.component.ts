import { ActivatedRoute } from '@angular/router';
import { StoreService } from './../storeService.service';
import { Employee } from './../employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
employeeList: Employee[];
taskpriority = ['Ultra', 'High', 'Normal', 'Low'];
index;
  constructor(private storeService: StoreService, private route: ActivatedRoute ) {
    this.employeeList = this.storeService.employeeList;
    this.route.params.subscribe(params => this.index = params.index);
    console.log(this.index);
   }

  ngOnInit() {
  }

}
