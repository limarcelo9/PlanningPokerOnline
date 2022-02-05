import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
