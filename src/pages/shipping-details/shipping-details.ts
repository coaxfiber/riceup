import {Component} from '@angular/core';
import {Config, NavController, NavParams,LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {AddproductPage} from '../addproduct/addproduct';
import {UpdateproductPage} from '../updateproduct/updateproduct';
import { AlertController } from 'ionic-angular';

import {ShippingPage} from '../shipping/shipping';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';

import {ShippingDetailsAddPage} from '../shipping-details-add/shipping-details-add';

import {ShippingDetailsUpdatePage} from '../shipping-details-update/shipping-details-update';
/**
 * Generated class for the ShippingDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shipping-details',
  templateUrl: 'shipping-details.html',
})
export class ShippingDetailsPage {
      loading: Loading;
	shipd:any;
	pushPage: any;
  cart:any;
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController,private alertCtrl: AlertController, public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController,  public config: Config) {
        this.pushPage = ShippingDetailsAddPage;
        this.GlobalvarsProvider.activeaddressid = this.navParams.get("id");
        this.GlobalvarsProvider.activeaddressaddress = this.navParams.get("address");
        this.GlobalvarsProvider.activeaddressmobile = this.navParams.get("mobile");
  }

  select(id,address,mobile) {
        this.GlobalvarsProvider.activeaddressid = id;
        this.GlobalvarsProvider.activeaddressaddress = address;
        this.GlobalvarsProvider.activeaddressmobile = mobile;
        this.navCtrl.pop();
    }
    
  openPropertyDetail(property: any) {
        this.navCtrl.push(ShippingDetailsUpdatePage, property);
    }
  
  ionViewWillEnter () {
     this.loading = this.loadingCtrl.create({
        content: 'Loading Product...',
      });
    this.loading.present();
     let urlSearchParams = new URLSearchParams();
                  urlSearchParams.append("passforpost",'any');
               let body = urlSearchParams.toString()
                 var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization",this.GlobalvarsProvider.gettoken());
                let option = new RequestOptions({ headers: header });
               
                        this.http.get('http://api.riceupfarmers.org/api/shippingdetails/',option)
                          .map(response => response.json())
                          .subscribe(res => {
                            console.log(res);
                            this.loading.dismissAll();
                            this.shipd=res;

                          },Error => {
                            console.log(Error);
                             this.presentAlert("No Internet Connection!"); 
                          });
  }
 
     presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }
     delship(ids: any){
    let alert = this.alertCtrl.create({
        title: 'Confirm Remove',
        message: 'Are you sure you want to remove you Shipping details?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              
                  }
          },
          {
            text: 'Confirm',
            handler: () => {
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                    
              let option = new RequestOptions({ headers: header });
              this.http.delete('http://api.riceupfarmers.org/api/shippingdetail/'+ids,option)
                .map(response => response.json())
                .subscribe(res => {
                  this.presentAlert('Product Deleted!');
                  this.navCtrl.setRoot(this.navCtrl.getActive().component);
                });
            }
          }
        ]
      });
      alert.present();
    
  }
  ionViewDidLoad() {
  }

}
