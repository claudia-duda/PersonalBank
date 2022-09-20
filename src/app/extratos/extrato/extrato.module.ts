import { DarkenOnHoverModule } from './../../directives/darken-on-hover/darken-on-hover.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { ExtratoComponent } from './extrato-list/extrato.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExtratoComponent,
    LoadButtonComponent
  ],
  imports: [
    CommonModule,
    DarkenOnHoverModule,
    RouterModule
  ]
})
export class ExtratoModule { }
