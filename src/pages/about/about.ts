import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    personName: string;
  constructor(public toastCtrl: ToastController) {

  }
  showGreeting(FirstName:string) {
    console.log(FirstName);
    this.toastCtrl.create({
        message: "Hello" +FirstName,
        duration: 3000
    }).present();
  }

}
