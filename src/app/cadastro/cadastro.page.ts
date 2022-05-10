import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';
import { Esporte } from '../model/esporte.model';
import { EsporteService } from '../services/esporte/esporte.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public quadra: Quadra = new Quadra();
  public esportes: Array<Esporte> = [];
  public selected: number;

  constructor(private quadraService: QuadrasService, private rota: Router, private EsporteService: EsporteService) { }

  ngOnInit() {
    this.esportes = this.EsporteService.getEsporte();
  }

  public cadastrar() {
    this.quadraService.add(this.quadra).then((resposta) => {
      console.log(resposta);
      this.rota.navigate(['/home']);
    });
  }
}