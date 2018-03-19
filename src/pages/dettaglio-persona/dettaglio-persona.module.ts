import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DettaglioPersonaPage } from './dettaglio-persona';

@NgModule({
  declarations: [
    DettaglioPersonaPage,
  ],
  imports: [
    IonicPageModule.forChild(DettaglioPersonaPage),
  ],
})
export class DettaglioPersonaPageModule {}
