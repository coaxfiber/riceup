import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, Loading } from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';
import {CartupdatePage} from '../cartupdate/cartupdate';
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
      order:any;
   loading: Loading;
      order_date:any;
      orders:any;
      gtotal:any= 'No Items';
      orderid:any;
  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public GlobalvarsProvider: GlobalvarsProvider,private menu : MenuController,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
        this.loading = this.loadingCtrl.create({
              content: 'Loading Cart...',
            });
           this.loading.present();
             let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("passforpost",this.GlobalvarsProvider.grant_type);
             let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.post('http://api.riceupfarmers.org/api/order/new',urlSearchParams,option)
          .map(response => response.json())
          .subscribe(res => {
            this.orderid = res.order_number[0].id;
              this.http.get('http://api.riceupfarmers.org/api/order/'+res.order_number[0].id,option)
              .map(response => response.json())
              .subscribe(rese => {
                console.log(res);
                if (rese.product_order!=undefined) {
                  this.orders = rese.product_order;
                  this.gtotal=this.gettotal(this.orders);
                  if (this.gtotal!=0) {
                    this.gtotal = "P"+this.gtotal;
                  }else
                  {
                    this.gtotal = 'No Items';
                  }
                  this.loading.dismissAll();
                }else
                {
                  this.presentAlert("No items in cart!"); 
                  this.loading.dismissAll();
                }
                
              },err =>{
                  this.loading.dismissAll();
              });   
              });  
  }

    updatecart(property: any) {
        this.navCtrl.push(CartupdatePage, property);
    }
  gettotal(gett:any){
    var total = 0;
    for(var i = 0; i < gett.length ; i++){
        total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
    }
    return total;
  }

  delcart(ids: any){
    let alert = this.alertCtrl.create({
        title: 'Confirm Remove',
        message: 'Are you sure you want to remove the item in the cart?',
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
                urlSearchParams.append("passforpost",this.GlobalvarsProvider.grant_type);
             let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                    
              let option = new RequestOptions({ headers: header });
              this.http.delete('http://api.riceupfarmers.org/api/cart/remove/'+ids,option)
                .map(response => response.json())
                .subscribe(res => {
                  this.navCtrl.setRoot(this.navCtrl.getActive().component);
                });
            }
          }
        ]
      });
      alert.present();
    
  }
  alertConfirm() {
    if (this.gtotal != undefined && this.gtotal != "P0" && this.gtotal != null && this.gtotal != 'No Items') {
      let alert = this.alertCtrl.create({
        title: 'Confirm Checkout',
        message: 'Are you sure you want to checkout the items in the cart?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Checkout',
            handler: () => {
              this.checkout();
            }
          }
        ]
      });
      alert.present();
    }else
        {
          this.presentAlert("No items in cart!");
        }
    }
  checkout(){
      // code...
     let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("shipping_mode",'0');
                urlSearchParams.append("order_status",'1');
                urlSearchParams.append("remarks",'');
             let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.patch('http://api.riceupfarmers.org/api/order/checkout/'+this.orderid+'?shipping_mode=0&order_status=1&remarks=',body,option)
          .map(response => response.json())
          .subscribe(res => {
            this.presentAlert(res.message);
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
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
