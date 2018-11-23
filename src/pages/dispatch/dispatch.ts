import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {TransactionsPage} from '../transactions/transactions';
import {Headers, RequestOptions} from '@angular/http';
import {LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DispatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-dispatch',
  templateUrl: 'dispatch.html',
})
export class DispatchPage {
	dis:any;shipadd:string;contact:string;
      loading: Loading;
    timee=Math.random();
  constructor(private alertCtrl: AlertController, private http: Http,public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,public navCtrl: NavController, public navParams: NavParams) {
  	 this.dis = this.navParams.data;
     this.shipadd = 'forpickup';
     this.contact = 'forpickup';
     console.log(this.dis);
     if (this.dis.order.mode_of_shipping==1) {
       this.shipadd= this.dis.order.shipping_detail.shipping_address
       this.contact= this.dis.order.shipping_detail.mobile_no
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchPage');
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
                  
                this.http.patch('http://api.riceupfarmers.org/api/product/dispatch/'+id,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      if (data.message!=undefined) {
                       this.presentAlert(data.message);
                      }else
                      {
                       this.presentAlert("Something went wrong!");

                      }
                      this.loading.dismissAll();
                      this.navCtrl.setRoot(TransactionsPage);
                   },Error=>{
                     this.presentAlert("No Internet Connection!");
                      this.loading.dismissAll();
                   });
  }pack(id){
     this.loading = this.loadingCtrl.create({
              content: 'Changing Status...',
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
                  
                this.http.patch('http://api.riceupfarmers.org/api/product/dispatch/'+id,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      if (data.message!=undefined) {
                       this.presentAlert(data.message);
                      }else
                      {
                       this.presentAlert("Something went wrong!");

                      }
                      this.loading.dismissAll();
                      this.navCtrl.setRoot(TransactionsPage);
                   },Error=>{
                     this.presentAlert("No Internet Connection!");
                      this.loading.dismissAll();
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
}
