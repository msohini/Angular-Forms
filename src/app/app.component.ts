import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) signuForm: NgForm;
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //this.signuForm.setValue({
    //  userdata: {
    //    username: suggestedName,
    //    email: ''
    //  },
    //  secret: 'pet',
    //  questionanswer: '',
    //  gender:'male'
    //});

    this.signuForm.form.patchValue({
      userdata: {
            username: suggestedName
      }
    })

  }
  answer = '';
  gender = ['male', 'female'];
  defaulQuestion = "pet";
  //onSubmit(form: NgForm) {
  //  console.log(form);
  //}
  onSubmit() {
    console.log(this.signuForm);
    this.submitted = true;
    this.user.username = this.signuForm.value.userdata.username;
    this.user.email = this.signuForm.value.userdata.email;
    this.user.secret = this.signuForm.value.secret;
    this.user.answer = this.signuForm.value.questionanswer;
    this.user.gender = this.signuForm.value.gender;
    this.signuForm.reset();
  }
}
