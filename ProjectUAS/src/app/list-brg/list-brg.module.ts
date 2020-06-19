import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBrgPageRoutingModule } from './list-brg-routing.module';

import { ListBrgPage } from './list-brg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBrgPageRoutingModule
  ],
  declarations: [ListBrgPage]
})
export class ListBrgPageModule {}
