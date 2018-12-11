import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module'

import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";

import { PilotosComponent } from "./components/pilotos/pilotos.component";

import { PilotoService } from "./services/piloto.service";
import { ResultadoService } from "./services/resultado.service";

@NgModule({
  declarations: [
    AppComponent,
    PilotosComponent
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
