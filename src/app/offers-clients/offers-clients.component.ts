import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-offers-clients',
  templateUrl: './offers-clients.component.html',
  styleUrls: ['./offers-clients.component.css']
})
export class OffersClientsComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  onTakeit(){
    this.snackBar.open('Genial!', 'Pronto recibiras un mensaje', {
      duration: 5000,
    });
    this.router.navigate(['clients']);
  }

}
