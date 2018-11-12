import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  isLinear = false;
  ti : string;
  codigo : number;
  name : string;
  salary : number;
  email: string;
  cel: number;

  firstFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  onShowOffers(){
    if(this.codigo != null)
      this.router.navigate(['offers']);
  }

}
