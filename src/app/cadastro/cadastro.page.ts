import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public quadra: Quadra = new Quadra();

  constructor(private quadraService: QuadrasService, private rota: Router) { }

  ngOnInit() {
  }

  public cadastrar() {
    this.quadraService.add(this.quadra);
    this.rota.navigate(['/home']);
  }
}
