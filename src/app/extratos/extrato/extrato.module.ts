import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { ExtratoComponent } from './extrato-list/extrato.component';



@NgModule({
  declarations: [
    ExtratoComponent,
    LoadButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExtratoModule { }
