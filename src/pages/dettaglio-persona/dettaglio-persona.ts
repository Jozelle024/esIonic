import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Result } from '../../models/persona';
import { ModalePersonaPage } from '../modale-persona/modale-persona';

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
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {
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
  mostraModale(){
    let modal = this.modalCtrl.create(ModalePersonaPage);
    this.navCtrl.push(ModalePersonaPage, {
      persona: this.persona
    })
    modal.present();
  }

}
