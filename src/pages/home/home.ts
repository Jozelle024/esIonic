import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Item } from '../../models/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Item[];
  constructor(public navCtrl: NavController) {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push(
        {
          text: "elemento " + i,
          id: i
        });
    }
  }

  itemSelected(item: Item){
    // alert(item.text);
    this.navCtrl.push(DetailPage,{
      item: item
    })
  }
}