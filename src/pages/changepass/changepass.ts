import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, Loading  } from 'ionic-angular';
import {Headers,RequestOptions} from '@angular/http';

import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Http} from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {AccountPage} from '../account/account';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-changepass',
  templateUrl: 'changepass.html',
})
export class ChangepassPage {
  temp='';
 	loading: Loading;
	cpass:any;
	form: FormGroup;
  constructor(private storage: Storage,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController,fb: FormBuilder, public navParams: NavParams,private http: Http,public GlobalvarsProvider:GlobalvarsProvider) {
  	this.form = fb.group({
        name: fb.group({
          oldpw: '',
          newpw: '',
          rnewpw: '',
        }),
      });

  }

    calltoChange(){
  	if (this.form.value.name.rnewpw==''||this.form.value.name.newpw==''||this.form.value.name.oldpw=='') {
  		this.alertConfirm2("please fill all the inputs");
  	}else if(this.form.value.name.rnewpw!=this.form.value.name.newpw)
  	{
  		this.alertConfirm2("New Password and ConfirmPassword does not Match!");
  	}else
  	{	 
      this.loading = this.loadingCtrl.create({
              content: 'Changing password...',
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
  		this.http.patch('http://api.riceupfarmers.org/api/user/changepass?oldpassword='+this.form.value.name.oldpw+'&newpassword='+this.form.value.name.newpw,body,option)
              .map(response => response.json())
              .subscribe(res => {   
                  this.temp = this.form.value.name.rnewpw;
	              	this.form.value.name.rnewpw='';this.form.value.name.newpw='';this.form.value.name.oldpw='';
                  this.form.reset();
                  this.loading.dismissAll();
	              	this.alertConfirm2(res.message);
              }); 
  	}
  }
	alertConfirm2(var2:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        message: var2,
        buttons: [
          {
            text: 'Dismiss',
            handler: () => {
            	if (var2 == "Password changed successfully!") {
            	   	this.navCtrl.setRoot(AccountPage);
                  this.storage.set('password', this.temp);  
            	}
	              	this.form.reset();
	              	this.form.value.name.rnewpw='';this.form.value.name.newpw='';this.form.value.name.oldpw='';
            }
          }
        ]
      });
      alert.present();
    }
}
