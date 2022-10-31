import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dest-component',
  templateUrl: './dest-component.component.html',
  styleUrls: ['./dest-component.component.css']
})
export class DestComponentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  name = '';
  email = '';
  date = Date;


  //appointment properties
  appointmentForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    date: new FormControl(new Date())
  });

  //logs to console values of form as json object
  //print formatted message 
  displayAppointment = () => {
    const displayMessage = `Hi, ${this.name} your appointment for ${this.date} is booked!`
      + ` Updates and reminders will be sent to ${this.email}`;
    const data = this.appointmentForm.value;
    console.log(data);
    console.log(displayMessage); 
    this.appointmentForm.reset(); //reset form
    return displayMessage;
  };
 
}
