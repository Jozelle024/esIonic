import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Result } from '../../models/persona';
import { PeopleProvider } from '../../providers/people/people';
import { DettaglioPersonaPage } from '../dettaglio-persona/dettaglio-persona';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  persone: Result[];
  constructor(public navCtrl: NavController,
              private peopleService: PeopleProvider,
              public loadingCtrl: LoadingController) {

  }
  ionViewDidLoad(){
    const loader = this.loadingCtrl.create({
      content: 'Getting latest entries...',
    });
    loader.present();
    this.peopleService.getRandomUsers().subscribe(dati => {
      this.persone = dati.results;
      loader.dismiss();
    })
  }
  dettaglioPersona(persona: Result){
    this.navCtrl.push(DettaglioPersonaPage,{
      persona: persona
    })
  }

}
