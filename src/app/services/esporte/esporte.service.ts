import { Injectable } from '@angular/core';
import { Esporte } from 'src/app/model/esporte.model';

@Injectable({
  providedIn: 'root'
})
export class EsporteService {
  public esportes: Array<Esporte> = [
    {
      id: 0,
      nome: 'Todos',
    }, {
      id: 1,
      nome: 'Futebol Society',
    }, {
      id: 2,
      nome: 'Futsal',
    }, {
      id: 3,
      nome: 'Volei',
    }
  ]

  constructor() { }

  public getAll() {
    return this.esportes;
  }
  public getEsporte() {
    let esportes = [];

    for (let obj of this.esportes) {
      if (obj.id !== 0) {
        esportes.push(obj);
      }
    }
    return esportes;
  }
}
