import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.persona = navParams.get('persona');
  }

  ionViewDidLoad() {
  }

  mostraDob(){
    let toast = this.toastCtrl.create({
      message: `Date of Birth: ${this.persona.dob}`,
      duration: 3000
    });
    toast.present();
  }

}
