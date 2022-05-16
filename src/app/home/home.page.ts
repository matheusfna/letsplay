import { Component, OnInit } from '@angular/core';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';
import { Esporte } from '../model/esporte.model';
import { EsporteService } from '../services/esporte/esporte.service';
import { AuthService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public quadras: Array<Quadra> = [];
  public esportes: Array<Esporte> = [];
  public selected: number;
public loading : boolean = false;

  constructor(private quadraService: QuadrasService, private EsporteService: EsporteService, public authService: AuthService) { }

  ngOnInit() {
    this.esportes = this.EsporteService.getAll();
    this.getAllQuadras();
  }

  private getAllQuadras() {
    this.quadraService.getAll().subscribe((quadrasColecao) => {
      this.quadras = quadrasColecao.map((item) => {
        return {
          id: item.payload.doc.id,
          nome: item.payload.doc.data()['nome'],
          logradouro: item.payload.doc.data()['logradouro'],
          bairro: item.payload.doc.data()['bairro'],
          cidade: item.payload.doc.data()['cidade'],
          esporte: item.payload.doc.data()['esporte'],
          valorHora: item.payload.doc.data()['valorHora'],
          telefone: item.payload.doc.data()['telefone'],
          descricao: item.payload.doc.data()['descricao']
        };
      });
    });
  }

  public getQuadrasByEsporte(cod: number) {
    let esportes = [];    
    if (cod === 0) {
      return this.quadras;
    } else {
      for (let obj of this.quadras) {
        if (obj.esporte === cod) {
          esportes.push(obj);
        }
      }
    }
    return esportes;
  }

  public getByEsportes() {
    this.loading = true;
    this.quadraService.getAll().subscribe((quadrasColecao) => {
      this.quadras = quadrasColecao.map((item) => {
        return {
          id: item.payload.doc.id,
          nome: item.payload.doc.data()['nome'],
          logradouro: item.payload.doc.data()['logradouro'],
          bairro: item.payload.doc.data()['bairro'],
          cidade: item.payload.doc.data()['cidade'],
          esporte: item.payload.doc.data()['esporte'],
          valorHora: item.payload.doc.data()['valorHora'],
          telefone: item.payload.doc.data()['telefone'],
          descricao: item.payload.doc.data()['descricao']
        };
      });

      this.quadras =  this.getQuadrasByEsporte(this.selected);
    });
    this.loading = false;
  }
}
