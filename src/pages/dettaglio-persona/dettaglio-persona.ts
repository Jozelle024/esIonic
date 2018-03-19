import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Result } from '../../models/persona';

/**
 * Generated class for the DettaglioPersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettaglio-persona',
  templateUrl: 'dettaglio-persona.html',
})
export class DettaglioPersonaPage {
  persona: Result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.persona = navParams.get('persona');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettaglioPersonaPage');
  }

}
