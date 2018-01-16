import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController, Loading  } from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {OrderinfoPage} from '../orderinfo/orderinfo';
import { AlertController } from 'ionic-angular';

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

      loading: Loading;
      orders: any;
  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,public GlobalvarsProvider: GlobalvarsProvider,private menu : MenuController,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
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
            }else
            {
              this.presentAlert(res.message);
            }
             
              this.loading.dismissAll();
          },err =>{ this.presentAlert("No Internet Connection!"); 
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
  
    callorderinfo(val: any) {
        this.navCtrl.push(OrderinfoPage, val);
    }
  
}
