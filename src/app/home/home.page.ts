import { Component, OnInit } from '@angular/core';

import { Quadra } from 'src/app/model/quadra.model';
import { QuadrasService } from 'src/app/services/quadras.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  public quadras: Array<Quadra> = [];

  constructor(private quadraService: QuadrasService) { }

  ngOnInit() {
    this.quadras = this.quadraService.getAll();
  }


}
