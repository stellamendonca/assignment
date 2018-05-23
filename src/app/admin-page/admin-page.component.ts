import { UserService } from './../user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HTTPServerService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee.model';
import { auth } from '../employee.model';

 
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  username: '';
  password: '';
  repassword: '';
  public authData: auth = new auth();
  constructor(private senddata: HTTPServerService, private route: ActivatedRoute,
    private router: Router, private userService: UserService) {
    }

  ngOnInit() {
  }


  onNewUser() {
    this.authData.username = this.username;
    this.authData.password = this.repassword;
    this.senddata.createEmployee(this.authData, this.username + '/Auth');

  }
}
