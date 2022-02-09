import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { FormsModule } from '@angular/forms';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ModalModule } from '../modal/modal.module';
@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormsModule,
    ModalModule,
  ]
})
export class SignInModule { }
