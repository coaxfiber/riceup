import { Component } from '@angular/core';import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';
/**
 * Generated class for the TermsandagreementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-termsandagreement',
  templateUrl: 'termsandagreement.html',
})
export class TermsandagreementPage {
    public counter=0;
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController) { platform.ready().then(() => {
          statusBar.styleDefault();
          splashScreen.hide();
     
          platform.registerBackButtonAction(() => {
            if (this.counter == 0) {
              this.counter++;
              this.presentToast();
              setTimeout(() => { this.counter = 0 }, 3000)
            } else {
              // console.log("exitapp");
              platform.exitApp();
            }
          }, 0)
        });

  } presentToast() {
    let toast = this.toast.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

}
