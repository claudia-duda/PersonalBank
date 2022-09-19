import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoComponent } from './extrato/extrato.component';
import { ExtratoDetalheComponent } from './extrato-detalhe/extrato-detalhe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoadButtonComponent } from './extrato/load-button/load-button.component';



@NgModule({
  declarations: [
    ExtratoDetalheComponent,
    ExtratoComponent,
    LoadButtonComponent
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
