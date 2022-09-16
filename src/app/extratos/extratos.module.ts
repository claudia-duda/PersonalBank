import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoComponent } from './extrato/extrato.component';
import { ExtratoDetalheComponent } from './extrato-detalhe/extrato-detalhe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExtratoDetalheComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [

  ]
})
export class ExtratosModule { }
