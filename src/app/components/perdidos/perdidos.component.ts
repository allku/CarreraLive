import { Component, OnInit } from '@angular/core';

import { Piloto } from "../../models/piloto";
import { Resultado } from "../../models/resultado";

import { PilotoService } from "../../services/piloto.service";
import { ResultadoService } from '../../services/resultado.service';

@Component({
  selector: 'app-perdidos',
  templateUrl: './perdidos.component.html',
  styleUrls: ['./perdidos.component.css']
})
export class PerdidosComponent implements OnInit {

  pilotoList: Piloto[]
  resultadoList: Resultado[]  

  missing: string[] = [""]

  constructor( 
    private pilotoService: PilotoService,
    private resultadoService: ResultadoService 
    ) { }

  ngOnInit() {
    this.pilotoService.getPilotos()
    .snapshotChanges()
    .subscribe(item => {
      this.pilotoList = []
      item.forEach(element => {
        let p = element.payload.toJSON()        
        p["$id"] = element.key
        this.pilotoList.push(p as Piloto)
      })
    })    
    
    this.resultadoService.getResultados()
    .snapshotChanges()
    .subscribe(item => {
      this.resultadoList = []
      item.forEach(element => {
        let r = element.payload.toJSON()
        // console.log(r)
        r["$id"] = element.key
        this.resultadoList.push(r as Resultado)        
      })      
    })
  }

  public open() {
    let pilotos: string[] = [""]
    let resultados: string[] = [""]
    
    // console.log("Pilotos")
    for (let entry of this.pilotoList) {
      pilotos.push(entry.numero + entry.categoria)
      // console.log(entry.numero + entry.categoria)
    }
    // console.log("Resultados")
    for (let entry of this.resultadoList) {
      resultados.push(entry.$id.replace("-",""))
      // console.log(entry.$id.replace("-",""))
    }

    this.missing = pilotos.filter(item => resultados.indexOf(item) < 0);
    // console.log(this.missing); // ["e", "f", "g"]
  }
}
