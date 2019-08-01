import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, Loading } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
import {Headers,RequestOptions} from '@angular/http';
import {Http } from '@angular/http';

/**
 * Generated class for the ShippingDetailsUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shipping-details-update',
  templateUrl: 'shipping-details-update.html',
})
export class ShippingDetailsUpdatePage {
	address:any;
  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
  	this.address = this.navParams.data; 
  }

 presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }
  updateaddress(){
  	let urlSearchParams = new URLSearchParams();
                  urlSearchParams.append("passforpost",'any');
               let body = urlSearchParams.toString()
                 var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization",this.GlobalvarsProvider.gettoken());
                let option = new RequestOptions({ headers: header });
               
                        this.http.patch('http://api.riceupfarmers.com/api/shippingdetail/'+this.address.id,{'address':this.address.shipping_address,'mobile_no':this.address.mobile_no},option)
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
  ionViewDidLoad() {
  }

}
