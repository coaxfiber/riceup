import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';

import {Headers, RequestOptions} from '@angular/http';
/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
	email=''
	verify=''
      loading: Loading;
      x=0
  constructor(private http: Http,public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  sendv(){
     this.loading = this.loadingCtrl.create({
              content: '',
            });
            this.loading.present();
  				let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("email",this.email);
              let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                        
                  let option = new RequestOptions({ headers: header });
                  
                this.http.post('http://api.riceupfarmers.com/api/password/forgot/',body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      console.log(data)
                      if (data.message!=undefined) {
                      	this.presentAlert(data.message)
                      	this.x=1;
                      }else
                      	this.presentAlert(data)
                      this.loading.dismissAll();
                   },Error=>{
                     this.presentAlert("Email address is not valid!");
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
