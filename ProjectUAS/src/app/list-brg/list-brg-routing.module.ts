import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBrgPage } from './list-brg.page';

const routes: Routes = [
  {
    path: '',
    component: ListBrgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBrgPageRoutingModule {}
