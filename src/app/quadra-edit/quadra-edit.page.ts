import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';

@Component({
  selector: 'app-quadra-edit',
  templateUrl: './quadra-edit.page.html',
  styleUrls: ['./quadra-edit.page.scss'],
})
export class QuadraEditPage implements OnInit {
  public quadra: Quadra = new Quadra();
  public quadraEdit: Quadra = new Quadra();

  constructor(private rotaAtiva: ActivatedRoute, private rota: Router, private quadrasService: QuadrasService) { }

  ngOnInit() {
    const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.quadra = this.quadrasService.getById(codigo);
  }

  public editar() {
    this.quadraEdit.nome = this.quadra.nome;
    this.quadrasService.edit(this.quadraEdit);
    this.rota.navigate(['/home']);
  }

  public deletar() {
    this.quadrasService.delete(this.quadra.id);
    this.rota.navigate(['/home']);
  }
}
