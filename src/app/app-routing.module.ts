import { OffersClientsComponent } from './offers-clients/offers-clients.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers/offers.component';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'basic', component: BasicFormComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'clients', component: OffersClientsComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    CommonModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
