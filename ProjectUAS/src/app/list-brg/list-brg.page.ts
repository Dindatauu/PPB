import { Component, OnInit } from '@angular/core';
import { BeliService } from '../services/beli.service';
import { Storage } from '@ionic/storage';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-list-brg',
  templateUrl: './list-brg.page.html',
  styleUrls: ['./list-brg.page.scss'],
})
export class ListBrgPage implements OnInit {
  title = "Shopping Bag";
  items = [];

  constructor(
    private beli:BeliService,
    private storage:Storage,
    private utils: UtilsService) { }

  ngOnInit() {
    this.ambildata();

    console.log(this.items);
  }

  ionViewWillEnter(){
    this.ambildata();
    console.log("enter")
  }

  ngOnDestroy(){
    this.ambildata();
    console.log("destroy")
  }

  async ambildata(){
    this.items = JSON.parse(await this.storage.get('beli'));
  }

  kosongkan(){
    this.beli.clearCart();
    this.utils.showToast("Data telah dihapus");
    this.ambildata();
  }
}
