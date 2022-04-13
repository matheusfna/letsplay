import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadraEditPage } from './quadra-edit.page';

const routes: Routes = [
  {
    path: '',
    component: QuadraEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadraEditPageRoutingModule {}
