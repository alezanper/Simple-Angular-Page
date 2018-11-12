import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.open('Genial!', 'Pronto recibiras un mensaje', {
      duration: 5000,
    });
    this.router.navigate(['']);
  }

}
