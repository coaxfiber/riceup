import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController,LoadingController} from 'ionic-angular';
import {CartPage} from '../cart/cart';
import {PropertyService} from '../../providers/property-service-mock';
import {Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers,RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';

import {Platform} from 'ionic-angular';
import {ShippingDetailsPage} from '../shipping-details/shipping-details';
/**
 * Generated class for the ShippingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shipping',
  templateUrl: 'shipping.html',
})
export class ShippingPage {
    gtotal :any;
    cart: any;
    orders: any;
    orderid: any;
    address:any;
    mobile:any;
    addresid=null;
    message=null;
  constructor(public platform: Platform,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.address=this.GlobalvarsProvider.activeaddressaddress;
        this.addresid=this.GlobalvarsProvider.activeaddressid;
        this.mobile=this.GlobalvarsProvider.activeaddressmobile;
        this.cart = this.navParams.data;  
        this.orders = this.cart.product_order;
        this.gtotal=this.gettotal(this.orders);
        this.orderid =this.cart.id;
        console.log(this.addresid);
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
                            if (res.message!=undefined) {
                             this.presentAlert(res.message); 
                            }
                          },Error => {
                            console.log(Error);
                             this.presentAlert("No Internet Connection!"); 
                          });

  }
  public ionViewWillEnter () {
    this.address=this.GlobalvarsProvider.activeaddressaddress;
        this.addresid=this.GlobalvarsProvider.activeaddressid;
        this.mobile=this.GlobalvarsProvider.activeaddressmobile;
  }
shipdetails(){
        this.navCtrl.push(ShippingDetailsPage, {
        id: this.addresid,address:this.address,mobile:this.mobile
        });
}
myCallbackFunction = (_params) => {
 return new Promise((resolve, reject) => {
     this.address=this.GlobalvarsProvider.activeaddressaddress;
     this.addresid=this.GlobalvarsProvider.activeaddressid;
     this.mobile=this.GlobalvarsProvider.activeaddressmobile;
     resolve();
 });
}

  ionViewDidLoad() {
  }
gettotal(gett:any){
    var total = 0;
    for(var i = 0; i < gett.length ; i++){
        total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
    }
    return total;
  }

  checkthisout() {
    if (this.addresid != null) {
      // code...
    let alert = this.alertCtrl.create({
        title: 'Confirm Checkout',
        message: "Are you sure you want to checkout the items in the cart?",
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
                let urlSearchParams = new URLSearchParams();
                  urlSearchParams.append("passforpost",'any');
               let body = urlSearchParams.toString()
                 var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization",this.GlobalvarsProvider.gettoken());
                let option = new RequestOptions({ headers: header });
               
                        this.http.patch('http://api.riceupfarmers.org/api/order/checkout/'+this.orderid+'?shipping_mode=1&order_status=1&remarks=&sd_id='+this.addresid,body,option)
                          .map(response => response.json())
                          .subscribe(res => {
                           // this.alertConfirm2(res.message);
                           this.alertConfirm2(res.message);
                          },Error => {
                             this.presentAlert("No Internet Connection!"); 
                          });
            }
          }
        ]
      });
      alert.present();   
    } else
    this.presentAlert(this.message); 
    }
    alertConfirm2(var2:any) {
      let alert = this.alertCtrl.create({
        title: 'Checkout',
        message: var2,
        buttons: [
          {
            text: 'Dismiss',
            handler: () => {
            this.navCtrl.setRoot(CartPage);
            }
          }
        ]
      });
      alert.present();
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
