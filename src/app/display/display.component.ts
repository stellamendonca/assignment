import { ActivatedRoute, Router } from '@angular/router';
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
  id;
  hide = false;
  constructor(private storeService: StoreService,
    private route: ActivatedRoute, private router: Router) {
    this.employeeList = this.storeService.employeeList;
    this.route.params.subscribe(params => this.index = params.index);
    this.route.params.subscribe(params => this.id = params.id);
    console.log(this.index);
  }

  ngOnInit() {
    if (this.employeeList[this.index].check === true) {
      this.hide = true;
    }
  }

  goback() {
    this.router.navigate(['home/' + this.id]);
  }
}
