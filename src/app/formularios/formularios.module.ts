import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NovoDepositoComponent } from './novo-deposito/novo-deposito.component';
import { FormularioComponent } from './formulario/formulario.component';




@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    HttpClientModule],
  declarations: [
    FormularioComponent,
    NovoDepositoComponent,
    NovaTransferenciaComponent
  ],
  exports: [

  ]
})

export class FormulariosModule{

}
