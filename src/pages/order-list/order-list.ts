import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController, Loading  } from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {OrderinfoPage} from '../orderinfo/orderinfo';
import { AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
    public counter=0;
      loading: Loading;
      orders: any;
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public GlobalvarsProvider: GlobalvarsProvider,private menu : MenuController,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
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
       this.loading = this.loadingCtrl.create({
        content: 'Loading Orders...',
      });
      this.loading.present();
       var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/orders',option)
          .map(response => response.json())
          .subscribe(res => {
            if (res.message==undefined) {
               this.orders = res;
               console.log( this.orders);
            }else
            {
              this.presentAlert(res.message);
            }
             
              this.loading.dismissAll();
          },err =>{ this.presentAlert("No Internet Connection!"); 
              this.loading.dismissAll();
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
   presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
    }
  
    callorderinfo(val: any) {
        this.navCtrl.push(OrderinfoPage, val);
    }
  
}
