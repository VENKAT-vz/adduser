import { Component } from '@angular/core';
import { CustomerService } from '../customer-service';
import { Users } from '../users';
import { Login } from '../login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  
  user: Users;  
  login: Login; 
  result: string;

  constructor(private _customerService: CustomerService) {
    this.user = new Users(); 
    this.login = new Login(); 
  }

  addUser(userForm: NgForm) {

    const requestBody = {
      users: {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        dateOfBirth: this.user.dateOfBirth,
        gender: this.user.gender,
        contactNumber: this.user.contactNumber,
        address: this.user.address,
        city: this.user.city,
        state: this.user.state,
        username: this.user.username,
        emailid: this.user.emailid
      },
      password: this.login.password,  
      role: this.login.role           
    };

    this._customerService.addCustomer(requestBody).subscribe(x=> {
      this.result=x;
  });
}
}
