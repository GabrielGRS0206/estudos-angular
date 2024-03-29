import { HttpClientModule } from '@angular/common/http';
import { NovaTransferenciaComponet } from './nova-transferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

//isso aqui define a data em portugues
registerLocaleData(localePt,'pt')


@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponet,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue : 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
