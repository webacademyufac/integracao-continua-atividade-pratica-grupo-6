import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private servico: LoginService
  ) { }

  usuario: Usuario = <Usuario>{};

  submit(form: NgForm): void {
    this.servico.login(this.usuario);
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
