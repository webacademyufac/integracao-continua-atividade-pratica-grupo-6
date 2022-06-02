import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from 'src/app/models/especialidade';
import { AlertaService } from 'src/app/services/alerta.service';
import { EspecialidadeService } from 'src/app/services/especialidade.service';
import { IComponentForm } from '../i-component-form';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styles: [
  ]
})
export class EspecialidadeFormComponent implements OnInit, IComponentForm<Especialidade> {

  constructor(
      private servico: EspecialidadeService,
      private servicoAlerta: AlertaService,
      private router: Router,
      private route: ActivatedRoute) { }

  registro: Especialidade = <Especialidade>{};
  
  submit(form: NgForm): void {
    if (this.registro.id) {
      this.servico.update(this.registro).subscribe({
        complete: () => {
          this.router.navigate(['/config/especialidades']);
          this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    } else {
      this.servico.insert(this.registro).subscribe({
        complete: () => {
          form.resetForm();
          this.servicoAlerta.enviarAlertaSucesso();
        }
      });
    }
  }

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Especialidade) => {
          this.registro = resposta;
        }
      });
    }

  }  

}
