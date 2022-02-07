import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
  ]
})
export class SignUpModule { }
