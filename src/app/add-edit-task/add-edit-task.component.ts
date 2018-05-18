import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HTTPServerService } from '../httpservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent {
  id :string;
  constructor( private senddata : HTTPServerService , private route : ActivatedRoute){
    this.route.params.subscribe( params => this.id = params.id);
    console.log(this.id);
  } 
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  taskpriority = ['Ultra', 'High' , 'Normal' , 'Low'];
  user = {
    username:'',
    password:'',
    taskname: '',
    taskdetail: '',
    priority: ''
  }; 
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // } username

  onSubmit() {
    this.submitted = true;
    this.user.taskname = this.signupForm.value.userData.taskname;
    this.user.taskdetail = this.signupForm.value.userData.taskdetail;
    this.user.priority = this.signupForm.value.asdf;
    this.senddata.insertEmployee(this.user , this.id);
    this.signupForm.reset();
    // this.user.taskname = '';
    // this.user.taskdetail = '';
    // this.user.priority = '';

    
    // insertEmployee
  }
}
