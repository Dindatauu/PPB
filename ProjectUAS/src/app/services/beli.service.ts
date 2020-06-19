import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const KEY_BUY = "beli";
const KEY_BUYER = "pembeli";

@Injectable({
  providedIn: 'root'
})
export class BeliService {
  items = [];
  data =[];
  brg = [];
  test = ''

  constructor(private storage : Storage) { 
    this.getItems();
  }


  getItems(){
    this.storage.get(KEY_BUY).then((hasil) => {
      if (hasil != null){
        this.items = JSON.parse(hasil);
        console.log(this.items);
      }else{
        this.items=[];
        console.log('empty');
      }
    });
    return this.items;
  }


 
  clearCart(){
    this.items=[];
    this.storage.remove(KEY_BUY);
    return this.items;
  }

}
