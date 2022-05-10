import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';
import { EsporteService } from '../services/esporte/esporte.service';
import { Esporte } from '../model/esporte.model';

@Component({
  selector: 'app-agendamento-quadra',
  templateUrl: './agendamento-quadra.page.html',
  styleUrls: ['./agendamento-quadra.page.scss'],
})
export class AgendamentoQuadraPage implements OnInit {

  public quadra: Quadra = new Quadra();
  //public esporte: Esporte = new Esporte();

  constructor(private rotaAtiva: ActivatedRoute, private rota: Router, private quadrasService: QuadrasService) { }

  ngOnInit() {
    const codigo = this.rotaAtiva.snapshot.paramMap.get('id');

    this.quadrasService.get(codigo).then((quadra) => {
      this.quadra = quadra;
    });
  }

}
