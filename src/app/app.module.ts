import { StoreService } from './storeService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HTTPServerService } from './httpservice.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { Employee } from './employee.model';

import { UserService } from './user.service';
import { AuthloginGuard } from './login/authlogin.guard';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortBarComponent } from './sort-bar/sort-bar.component';
import { OrderModule } from 'ngx-order-pipe';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthloginGuard] , component: HomeComponent },
  { path: 'home/:id', canActivate: [AuthloginGuard] , component: HomeComponent },
  { path: 'addedit', canActivate: [AuthloginGuard] , component: AddEditTaskComponent },
  { path: 'addedit/:id', canActivate: [AuthloginGuard] , component: AddEditTaskComponent },
  { path: 'search', canActivate: [AuthloginGuard] , component: SearchBarComponent },
  { path: 'sort', canActivate: [AuthloginGuard] , component: SortBarComponent  },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddEditTaskComponent,
    SearchBarComponent,
    SortBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    OrderModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
    ],
  providers: [UserService , HTTPServerService , AuthloginGuard, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
