import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './components/agenda-form/agenda-form.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { BarraComandosComponent } from './components/barra-comandos/barra-comandos.component';
import { ErroInterceptor } from './interceptors/erro.interceptor';
import { AlertaComponent } from './components/alerta/alerta.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { RequisicaoInterceptor } from './interceptors/requisicao.interceptor';
import { FiltroAtendimentoComponent } from './components/filtro-atendimento/filtro-atendimento.component';
import { ConvenioFormComponent } from './components/convenio-form/convenio-form.component';
import { ConvenioListComponent } from './components/convenio-list/convenio-list.component';
import { EspecialidadeListComponent } from './components/especialidade-list/especialidade-list.component';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { ProfissionalListComponent } from './components/profissional-list/profissional-list.component';
import { UnidadeListComponent } from './components/unidade-list/unidade-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UnidadeFormComponent } from './components/unidade-form/unidade-form.component';
import { ProfissionalFormComponent } from './components/profissional-form/profissional-form.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { EspecialidadeFormComponent } from './components/especialidade-form/especialidade-form.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    AgendaListComponent,
    AgendaFormComponent,
    AtendimentoListComponent,
    BarraComandosComponent,
    AlertaComponent,
    LoginComponent,
    UsuarioListComponent,
    FiltroAtendimentoComponent,
    ConvenioFormComponent,
    ConvenioListComponent,
    EspecialidadeListComponent,
    PacienteListComponent,
    ProfissionalListComponent,
    UnidadeListComponent,
    UsuarioFormComponent,
    UnidadeFormComponent,
    ProfissionalFormComponent,
    PacienteFormComponent,
    EspecialidadeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientTestingModule,
    RouterTestingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequisicaoInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
