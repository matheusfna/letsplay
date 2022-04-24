import { Injectable } from '@angular/core';
import { Quadra } from '../model/quadra.model';

@Injectable({
  providedIn: 'root'
})
export class QuadrasService {

  public quadras: Array<Quadra> = [
    {
      id: 0,
      nome: 'Quadra dos Pobres',
      logradouro: 'rua dos pobres 666',
      bairro: 'mae dos pobres',
      cidade: 'Belo Horizonte',
      esporte: 'Futebol',
      valorHora: 150,
      telefone: '98888888',
      descricao: 'Uma quadra esportiva perfeita para sua diversão'
    },
    {
      id: 1,
      nome: 'Quadra dos Ricos',
      logradouro: 'rua dos ricos 555',
      bairro: 'mae dos ricos',
      cidade: 'Belo Horizonte',
      esporte: 'Futebol',
      valorHora: 5000,
      telefone: '977777777',
      descricao: 'Uma quadra esportiva perfeita para sua diversão'
    },
    {
      id: 2,
      nome: 'Quadra dos Sem Ideia',
      logradouro: 'Sem ideia 444',
      bairro: 'mae dos sem ideia',
      cidade: 'Belo Horizonte',
      esporte: 'volei',
      valorHora: 50,
      telefone: '966666666',
      descricao: 'Uma quadra esportiva perfeita para sua diversão'
    }
  ]

  constructor() { }

  public getAll() {
    return this.quadras;
  }

  public getById(id: number) {
    for (let obj of this.quadras) {
      if (obj.id === id) {
        return obj;
      }
    }
  }

  public add(quadra: Quadra) {
    quadra.id = this.quadras.length;
    this.quadras.push(quadra);
  }

  public edit(quadra: Quadra, id: Number) {

    for (let obj of this.quadras) {
      if (obj.id === id) {
        obj.nome = quadra.nome;
        obj.logradouro = quadra.logradouro;
        obj.bairro = quadra.bairro;
        obj.cidade = quadra.cidade;
        obj.esporte = quadra.esporte;
        obj.valorHora = quadra.valorHora;
        obj.telefone = quadra.telefone;
        obj.descricao = quadra.descricao;
        break;
      }
    }
  }

  public delete(id: number) {
    let posicao = 0;

    posicao = this.quadras.findIndex((quadra) => quadra.id === id);

    if (posicao > -1)
      this.quadras.splice(posicao, 1);
  }
}


