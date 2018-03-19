import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Result } from '../../models/persona';

/**
 * Generated class for the ModalePersonaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modale-persona',
  templateUrl: 'modale-persona.html',
})
export class ModalePersonaPage {
  persona: Result;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.persona = this.navParams.get('persona');
  }

  ionViewDidLoad() {
  }

  dismissModale(){
    this.viewCtrl.dismiss();
  }

}
