import { Component } from '@angular/core';

import { StorageService } from '../services/storage.services';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public quadras = [];
  public quadraT = [];

  public x() {
    this.quadraT.push({ nome: "jose", valor: "ol111a" })
    this.storage.set('TESTE', this.quadraT);
  };

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.get();
  }
  public get() {
    this.quadras = [];
    this.storage.get('TESTE').then((x) => {
      x.forEach(item => {
        this.quadras.push({ nome: item.nome, valor: item.valor });
      });
    });
  }

}
