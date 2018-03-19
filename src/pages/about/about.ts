import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Login } from '../../models/persona';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  credenziali: Login = new Login();
  constructor(public navCtrl: NavController) {
  }
  tornaHome(){
    this.navCtrl.push(HomePage);
  }
 signIn(){
    this.navCtrl.push(HomePage, {
      credenziali: this.credenziali
    })
  }
}
