import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  pilotoList: AngularFireList<any>

  constructor(private firebase: AngularFireDatabase) { }

  getPilotos() {
    return this.pilotoList = this.firebase.list('Pilotos')
  }
}
