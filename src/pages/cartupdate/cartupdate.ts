import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController,LoadingController, Loading} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {CartPage} from '../cart/cart';
import {PropertyService} from '../../providers/property-service-mock';
import {Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers,RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CartupdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cartupdate',
  templateUrl: 'cartupdate.html',
})
export class CartupdatePage {
	proid:any;
 	loading: Loading;
    property: any;
    quantity:any=1;
    constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.property = this.navParams.data.farmer_product;
        this.proid = this.navParams.data.id;
        this.quantity = this.navParams.data.quantity;
    }


    addq(){
      this.quantity +=1;
    }
    subq(){
      
      if (this.quantity > 0) {
        this.quantity -=1;
      }
    }
    openBrokerDetail(broker: any) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }
    updatecart(){
        if (this.quantity>0&&this.quantity<=this.property.stocks_available) {
        this.loading = this.loadingCtrl.create({
              content: 'Updating Order...',
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
                  
        console.log('http://api.riceupfarmers.org/api/cart/update/'+this.proid+'?qty='+this.quantity);
                this.http.patch('http://api.riceupfarmers.org/api/cart/update/'+this.proid+'?qty='+this.quantity,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      this.quantity = 1;
                      this.loading.dismissAll();
                      this.presentConfirm();
                   });
                  
        }else
        {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to "+this.property.stocks_available);
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

    presentConfirm() {
  let alert = this.alertCtrl.create({
    title: '',
    message: 'Order Updated!',
    buttons: [
      {
        text: 'Confirm',
        handler: () => {
          this.navCtrl.setRoot(CartPage);
        }
      }
    ]
  });
  alert.present();
}
}
