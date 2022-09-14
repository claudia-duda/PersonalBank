import { NovoDepositoComponent } from "./formularios/novo-deposito/novo-deposito.component";
import { NovaTransferenciaComponent } from './formularios/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
  {path: 'novo-deposito', component: NovoDepositoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
