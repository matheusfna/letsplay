import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'ion2-calendar';

import { IonicModule } from '@ionic/angular';

import { AgendamentoQuadraPageRoutingModule } from './agendamento-quadra-routing.module';

import { AgendamentoQuadraPage } from './agendamento-quadra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendamentoQuadraPageRoutingModule,
    CalendarModule
  ],

  declarations: [AgendamentoQuadraPage]
})
export class AgendamentoQuadraPageModule { }
