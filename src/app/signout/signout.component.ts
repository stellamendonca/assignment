import { UserService } from './../user.service';
import { StoreService } from './../storeService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  signOut() {
    this.service.logout();
  }

}
