import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Item } from '../../models/item';
import { Login } from '../../models/persona';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Item[];
  credenziali: Login;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push(
        {
          text: "elemento " + i,
          id: i
        });
    }
    this.credenziali = this.navParams.get('credenziali');
  }

  itemSelected(item: Item){
    // alert(item.text);
    this.navCtrl.push(DetailPage,{
      item: item
    })
  }
}