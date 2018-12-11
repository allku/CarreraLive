import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { PilotoService } from "../../services/piloto.service";
import { ResultadoService } from '../../services/resultado.service';

import { Piloto } from "../../models/piloto";
import { Resultado } from "../../models/resultado";

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrls: ['./pilotos.component.css']
})

export class PilotosComponent implements OnInit {

  pilotoList: Piloto[]
  resultadoList: Resultado[]
  displayedColumns: string[] = ['numero', 'categoria', 'nombre', 'apellido', 'control', 'tiempo'];
  // ELEMENT_DATA: Piloto[] = [
  //   {$id: '1', numero: 'Juan', categoria: 'A', nombre: 'H', apellido: 'Ha', control: 's'}
  // ];
  // dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  dataSourcePilotos = null
  dataSourceResultados = null

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
          // console.log(x)
          p["$id"] = element.key
          this.pilotoList.push(p as Piloto)
          this.dataSourcePilotos = new MatTableDataSource(this.pilotoList)
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
        this.dataSourceResultados = new MatTableDataSource(this.resultadoList)
      })
    })
  }

  applyFilter(filterValue: string) {
    this.dataSourcePilotos.filter = filterValue.trim().toLowerCase();
  }

}
