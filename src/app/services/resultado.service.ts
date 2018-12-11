import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  resultadoList:  AngularFireList<any>

  constructor(private firebase: AngularFireDatabase) { }

  getResultados() {
    return this.resultadoList = this.firebase.list('Resultados')
  }
}
