import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module'

import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";

import { PilotosComponent } from "./components/pilotos/pilotos.component";
import { ResultadosComponent } from "./components/resultados/resultados.component";
import { PerdidosComponent } from "./components/perdidos/perdidos.component";
import { AuspiciantesComponent } from "./components/auspiciantes/auspiciantes.component";

import { PilotoService } from "./services/piloto.service";
import { ResultadoService } from "./services/resultado.service";

@NgModule({
  declarations: [
    AppComponent,
    PilotosComponent,
    ResultadosComponent,
    PerdidosComponent,
    AuspiciantesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule    
  ],
  providers: [
    PilotoService,
    ResultadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
