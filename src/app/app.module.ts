import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule  } from '@angular/material'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from "@angular/material";

import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { OffersClientsComponent } from './offers-clients/offers-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductsComponent,
    BasicFormComponent,
    OffersComponent,
    LoginComponent,
    OffersClientsComponent
  ],
  imports: [MatSnackBarModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule, MatInputModule,  FormsModule, ReactiveFormsModule, 
    MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
