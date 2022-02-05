import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user = '';
  public password = '';
  public passwordConfirmation = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.authService.authenticate(this.user, this.password).subscribe(() => {
      window.alert('Cadastro realizado  com sucesso!')
      this.router.navigate(['']);
    }, (error) => {
      window.alert('Falha ao realizar cadastro.')
      console.log(error)
    })
  }
}
