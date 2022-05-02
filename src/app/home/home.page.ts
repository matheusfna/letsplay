import { Component, OnInit } from '@angular/core';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';
import { Esporte } from '../model/esporte.model';
import { EsporteService } from '../services/esporte/esporte.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public quadras: Array<Quadra> = [];
  public esportes: Array<Esporte> = [];
  public selected: number;

  constructor(private quadraService: QuadrasService, private EsporteService: EsporteService) { }

  ngOnInit() {
    this.quadras = this.quadraService.getAll();
    this.esportes = this.EsporteService.getAll();
  }
  public getByEsportes() {
    this.quadras = this.quadraService.getByEsporte(this.selected);
    console.log(this.quadras);
  }
}
