import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { SpinnerService } from '../core/spinner/spinner/spinner.service';
import { ModalComponent } from '../modal/modal.component';
import { SignUp } from './service/sign-up';
import { SignUpService } from './service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  public user = '';
  public password = '';
  public passwordConfirmation = '';

  signUpForm!: FormGroup;
  message = '';
  fade = '';

  constructor(
    private signUpService: SignUpService,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: [''] ,
      password: [''] ,
    })
  }

  onCreate(modal: ModalComponent){
    debugger
    const newUser = this.signUpForm.getRawValue() as SignUp
    this.spinnerService.requestStarted();
    this.signUpService.createUser(newUser).subscribe(() => {
      this.message = 'Cadastro realizado  com sucesso!'
      this.spinnerService.requestEnded();
      this.router.navigate(['']);
      modal.toggle()
    }, (error) => {
      this.message = 'Falha ao realizar cadastro.'
      console.log(error)
      this.spinnerService.resetSpinner();
      modal.toggle()
    })

  }

  onPrimaryAction() {

  }

  onSecondAction() {

  }
}
