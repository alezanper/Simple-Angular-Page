import { ProductsComponent } from './products/products.component';
import { CreditRequestComponent } from './credit-request/credit-request.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'basic', component: BasicFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
