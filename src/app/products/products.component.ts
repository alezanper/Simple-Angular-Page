import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  onCreditRequest(){
    this.router.navigate(['basic'], {relativeTo: this.route});
  }

}
