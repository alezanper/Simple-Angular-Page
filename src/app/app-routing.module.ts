import { ProductsComponent } from './products/products.component';
import { CreditRequestComponent } from './credit-request/credit-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'creditRequest', component: CreditRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
