import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
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

  constructor(
    private signUpService: SignUpService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    })
  }

  onCreate(){
    const newUser = this.signUpForm.getRawValue() as SignUp
    console.log(newUser)
    this.signUpService.createUser(newUser).subscribe(() => {
      window.alert('Cadastro realizado  com sucesso!')
      this.router.navigate(['']);
    }, (error) => {
      window.alert('Falha ao realizar cadastro.')
      console.log(error)
    })
  }
}
