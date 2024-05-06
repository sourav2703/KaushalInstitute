import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    phone:''
  };

  submitForm() {
    // Here you can implement the logic to send the form data to a backend server or handle it as needed.
    console.log(this.formData);
  }
}
