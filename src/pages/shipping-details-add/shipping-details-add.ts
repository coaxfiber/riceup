import {Component} from '@angular/core';
import {Config, NavController, NavParams,LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {AddproductPage} from '../addproduct/addproduct';
import {UpdateproductPage} from '../updateproduct/updateproduct';
import { AlertController } from 'ionic-angular';

import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ShippingDetailsAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shipping-details-add',
  templateUrl: 'shipping-details-add.html',
})
export class ShippingDetailsAddPage {
	mobile_no="";
	address="";
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController,private alertCtrl: AlertController, public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController,  public config: Config) {
   				
  }
 presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }

  ionViewDidLoad() {
  }
  addaddress(){
  	let urlSearchParams = new URLSearchParams();
                  urlSearchParams.append("passforpost",'any');
               let body = urlSearchParams.toString()
                 var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization",this.GlobalvarsProvider.gettoken());
                let option = new RequestOptions({ headers: header });
               
                        this.http.post('http://api.riceupfarmers.com/api/shippingdetail',{'address':this.address,'mobile_no':this.mobile_no},option)
                          .map(response => response.json())
                          .subscribe(res => {
                             this.presentAlert(res.message); 
                            this.pop();
                           // this.alertConfirm2(res.message);

                          },Error => {
                            console.log(Error);
                             this.presentAlert("No Internet Connection!"); 
                          });

  }
pop(){
	this.navCtrl.pop();
}
}
