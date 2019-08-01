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
 * Generated class for the UserproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-userproduct',
  templateUrl: 'userproduct.html',
})
export class UserproductPage {
       public counter=0; loading: Loading;
 products:any;pushPage: any;
 timee:any;
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController,private alertCtrl: AlertController, public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController,  public config: Config) {
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
     this.timee = Date.now();
    this.pushPage=AddproductPage;
    this.loading = this.loadingCtrl.create({
        content: 'Loading Product...',
      });
      this.loading.present();
    this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/products/'+this.GlobalvarsProvider.loggeduser.id,option)
          .map(response => response.json())
          .subscribe(res => {
             if (res.message==undefined) {
               this.products = res;
            }else
            {
              this.presentAlert(res.message);
            }
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
openPropertyDetail(property: any) {
        this.navCtrl.push(UpdateproductPage, property);
    }

    delprod(ids: any){
    let alert = this.alertCtrl.create({
        title: 'Confirm Remove',
        message: 'Are you sure you want to remove your Product?',
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
              this.http.delete('http://api.riceupfarmers.com/api/product/remove/'+ids,option)
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
    
  } presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
    }
}
