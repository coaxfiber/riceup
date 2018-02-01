import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, Loading } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
import {Headers,RequestOptions} from '@angular/http';
import {Http } from '@angular/http';
import {UserproductPage} from '../userproduct/userproduct';
import {ChangepicPage} from '../changepic/changepic';
/**
 * Generated class for the UpdateproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-updateproduct',
  templateUrl: 'updateproduct.html',
})
export class UpdateproductPage {
 	loading: Loading;
	property:any;
	stocks_available:any;
	product_name:any;
	product_desc:any;
	unit_type:any;
	price_per_unit:any;
	date_of_harvest:any;timee:any;

  datenow = Date.now();
  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
  	
     this.timee = Date.now();this.property = this.navParams.data;  
  	this.stocks_available=this.property.stocks_available;
  	this.product_name=this.property.product_name;
	this.product_desc=this.property.product_desc;
	this.unit_type=this.property.unit_type;
	this.price_per_unit=this.property.price_per_unit;
	this.date_of_harvest=this.property.date_of_harvest;
  }
  update()
  {
  	 if (this.stocks_available!=''||this.product_name!=''||this.product_desc!=''||this.unit_type!=''||this.price_per_unit!=''||this.date_of_harvest!='') {
        this.loading = this.loadingCtrl.create({
              content: 'Updating Product...',
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
        
                this.http.patch('http://api.riceupfarmers.org/api/product/update/'+this.property.id+'?name='+this.product_name+'&desc='+this.product_desc+'&photo_url='+this.property.photo_url+'&unit='+this.unit_type+'&price='+this.price_per_unit+'&stocks='+this.stocks_available+'&harvest_date='+this.date_of_harvest,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      this.loading.dismissAll();
                     this.presentConfirm("Product Updated!!");
                   });
                  
        }else
        {
            this.presentAlert("All Fields are required!");
        }
  }

  presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
    }
     presentConfirm(val:any) {
  let alert = this.alertCtrl.create({
    title: '',
    message: val,
    buttons: [
      {
        text: 'Dismiss',
        handler: () => {
          this.navCtrl.setRoot(UserproductPage);
        }
      }
    ]
  });
  alert.present();
}
changepic(var2:any){
  this.navCtrl.push(ChangepicPage,var2);
}
}
