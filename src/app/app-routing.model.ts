import { ExtratoResolver } from './extratos/extrato/extrato.resolver';
import { ExtratoDetalheComponent } from './extratos/extrato-detalhe/extrato-detalhe.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NovoDepositoComponent } from "./formularios/novo-deposito/novo-deposito.component";
import { NovaTransferenciaComponent } from './formularios/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extratos/extrato/extrato-list/extrato.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato',
    component: ExtratoComponent,
    resolve: { extratos: ExtratoResolver}
  },
  {path: 'extrato/:id', component: ExtratoDetalheComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
  {path: 'novo-deposito', component: NovoDepositoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
