import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ResultadoService } from '../../services/resultado.service';

import { Resultado } from "../../models/resultado";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private resultadoService: ResultadoService ) { }

  ngOnInit() {
  }

}
