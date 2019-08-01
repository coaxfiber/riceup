import {Component} from '@angular/core';
import {Config, NavController, NavParams,LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';

import {DispatchPage} from '../dispatch/dispatch';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';
/**
 * Generated class for the TransactionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

    viewMode: string = "Pending";
public counter=0;
    orders:Array<any>;
    orders1:Array<any>;
    orders2:Array<any>;
      loading: Loading;
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
    this.loading = this.loadingCtrl.create({
        content: 'Loading Product...',
      });

    this.loading.present();
    this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/ordersperfarmer/',option)
          .map(response => response.json())
          .subscribe(res => {
             if (res.message==undefined) {
               console.log(res);
               this.orders = res;
               this.orders1 = res;
               this.orders2 = res;
               console.log(res);
            }else
            {
              this.presentAlert(res.message);
            }
              this.loading.dismissAll();
          },error=>{
              this.loading.dismissAll();
              this.presentAlert("No Internet Connection!");
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

  ionViewDidLoad() {
  }

presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
    }
    open(list:any){
        this.navCtrl.push(DispatchPage, list);
    }

    dispatch(id){
      this.loading = this.loadingCtrl.create({
              content: 'Dispatching Product...',
            });
            this.loading.present();
             let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
              let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                        
                  let option = new RequestOptions({ headers: header });
                  
                this.http.patch('http://api.riceupfarmers.com/api/product/dispatch/'+id,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      if (data.message!=undefined) {
                       this.presentAlert(data.message);
                      }else
                      {
                       this.presentAlert("Something went wrong!");

                      }
                      this.loading.dismissAll();
                      this.navCtrl.setRoot(this.navCtrl.getActive().component);
                   },Error=>{
                     this.presentAlert("No Internet Connection!");
                      this.loading.dismissAll();
                   });
    }
     pack(id){
      this.loading = this.loadingCtrl.create({
              content: 'Changing status...',
            });
            this.loading.present();
             let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
              let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                        
                  let option = new RequestOptions({ headers: header });
                  
                this.http.patch('http://api.riceupfarmers.com/api/product/pack/'+id,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      if (data.message!=undefined) {
                       this.presentAlert(data.message);
                      }else
                      {
                       this.presentAlert("Something went wrong!");

                      }
                      this.loading.dismissAll();
                      this.navCtrl.setRoot(this.navCtrl.getActive().component);
                   },Error=>{
                     this.presentAlert("No Internet Connection!");
                      this.loading.dismissAll();
                   });
    }
}
