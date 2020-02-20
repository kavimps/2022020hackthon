import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  // public formDet = new FormGroup({
  
  //   formvalidation: new FormControl(),
  //   radionumber: new FormControl(),
  //   radiotext: new FormControl(),
  //   radiopassword: new FormControl()

  // });

  constructor( private route: Router) {

  }

  ngOnInit(): void {

    //this.createForm();

  }

  //  // create a reactive  form
  //  createForm() {
  //   this.formDet = this.formBuilder.group({
     
  //     formvalidation: ['', [
  //        Validators.required,
  //       ]]
  //   });
  // }

 

    //gets login form controls

   //get formControl() { return this.formDet.controls; }



}

