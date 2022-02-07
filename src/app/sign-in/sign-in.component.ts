
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public user='';
  public password='';

  constructor(private authService: AutenticacaoService) { }

  ngOnInit(): void {
  }


  onAuthenticate(){
    this.authService.authenticate(this.user, this.password).subscribe(() => {
      window.alert('Autenticado com sucesso!')
    }, (error) => {
      window.alert('Usuario ou senha inválido')
      console.log(error)
    });
  }
}
