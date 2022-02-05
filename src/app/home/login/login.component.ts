
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
