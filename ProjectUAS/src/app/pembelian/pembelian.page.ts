import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { UtilsService } from '../services/utils.service';
import { Storage } from '@ionic/storage';
import { BeliService } from '../services/beli.service';

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.page.html',
  styleUrls: ['./pembelian.page.scss'],
})
export class PembelianPage implements OnInit {
  public dataPembeli = {
    nama: '',
    alamat: ''
  };

  beli :any = [];

  constructor(
    private router: Router,
    private utils: UtilsService,
    private cart: CartService,
    private storage:Storage,
    private pembelian: BeliService
  ) { }

  ngOnInit() {
  }

  pembayaran(){
      console.log(this.dataPembeli);
      this.storage.set("pembeli", JSON.stringify(this.dataPembeli.nama));
      this.storage.set("alamat", JSON.stringify(this.dataPembeli.alamat));
      this.storage.get("cart").then(this.beli);
      console.log("Barang dibeli = "+this.beli);
      this.storage.set("beli",JSON.stringify(this.cart.items));
      this.cart.clearCart();
      console.log("Nama adalah "+this.getNama()+" Alamat di "+this.getAlamat(this.dataPembeli))
      this.utils.showToast("Pembelian Sukses. Tunggu kedatangan barang Anda");
      this.router.navigate(['/home']);
    }

  getNama(){
    return this.dataPembeli.nama;
  }

  getAlamat(data){
    return data.alamat;
  }
}


