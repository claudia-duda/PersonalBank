import { LOCALE_ID, NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import LocalePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.model';
import { FormulariosModule } from './formularios/formularios.module';

registerLocaleData(LocalePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormulariosModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
