import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
})
export class SignUpModule { }
