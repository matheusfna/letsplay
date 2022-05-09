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
  public esporte: Esporte = new Esporte();

  constructor(private rotaAtiva: ActivatedRoute, private rota: Router, private quadrasService: QuadrasService, private esporteService: EsporteService) { }

  ngOnInit() {
    const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.quadra = this.quadrasService.getById(codigo);

    this.esporte = this.esporteService.getById(this.quadra.esporte);
  }

}
