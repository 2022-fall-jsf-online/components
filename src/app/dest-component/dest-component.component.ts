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


  //appointment properties
  appointmentForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    date: new FormControl(new Date())
  });


  displayAppointment = () => {
    console.log(this.appointmentForm.value);
    const data = this.appointmentForm.value;
    console.log(data);
    return this.appointmentForm.value
    
  };
 
}
