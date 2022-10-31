import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  date = new FormControl(new Date());
  name = "";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);


  displayAppointment = () => {

  };
 
}
