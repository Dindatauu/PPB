import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../services/cart.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-accessories',
  templateUrl: 'accessories.page.html',
  styleUrls: ['accessories.page.scss'],
})
export class AccessoriesPage {
  listProducts =[];
  constructor(
    private cart:CartService,
    private utils : UtilsService,
  ) {
    this.listProducts = products;
    console.log(products);
    console.log(this.listProducts);
  }

  beli (data){
    console.log('Anda melakukan klik pada ' + data.name + "dengan harga Rp."+data.price);
    this.utils.showToast('Anda membeli ' + data.name);
    this.cart.addToCart(data);
  }

}
