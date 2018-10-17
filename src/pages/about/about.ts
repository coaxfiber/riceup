import { Component } from '@angular/core';

import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    public counter=0;

  constructor(public navCtrl: NavController,public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController) {
  	 platform.ready().then(() => {
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

  }



 presentToast() {
    let toast = this.toast.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

}
