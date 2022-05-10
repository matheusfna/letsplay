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
    this.esportes = this.EsporteService.getAll();

    this.quadraService.getAll().subscribe((quadrasColecao)=>{
      console.log(quadrasColecao);

      this.quadras = quadrasColecao.map((item)=>{
        return {
          id: item.payload.doc.id,
          nome: item.payload.doc.data()['nome'],
          descricao: item.payload.doc.data()['descricao'],
          preco: item.payload.doc.data()['preco'],
          foto: item.payload.doc.data()['foto']
        };
      });
    });
  }
  public getByEsportes() {
    //this.quadras = this.quadraService.getByEsporte(this.selected);
    console.log(this.quadras);
  }
}
