import { NuevaTransferenciaComponent } from './NuevaTransferencia/nueva-transferencia.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeEs from "@angular/common/locales/es-CO"
import {registerLocaleData} from "@angular/common"

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';

import { HttpClientModule } from "@angular/common/http"

registerLocaleData(localeEs, "es")


@NgModule({
  declarations: [
    AppComponent,
    NuevaTransferenciaComponent,
    EstadoCuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
