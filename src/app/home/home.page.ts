import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public quadras = [
    { nome: "José Geraldo", valor: "R$ 120/hr" }
  ];
  public x() {
    this.quadras.push({ nome: "Teste", valor: "ola" })
  };

  constructor() { }



}
