import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoDetalheComponent } from './extrato-detalhe/extrato-detalhe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ExtratoModule } from './extrato/extrato.module';



@NgModule({
  declarations: [
    ExtratoDetalheComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExtratoModule
  ],
  exports: [

  ]
})
export class ExtratosModule { }
