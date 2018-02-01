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
  orders:any;
      loading: Loading;
  gtotal :any = 'No Items';
  orderid:any = undefined;
  ord;
  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public GlobalvarsProvider: GlobalvarsProvider,private menu : MenuController,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
             this.loading = this.loadingCtrl.create({
              content: 'Loading Cart...',
            });
            this.loading.present();
           

  }
   addq(pid,q,sa){
      q +=1;
      if (q>0&&q<=sa) {
        this.loading = this.loadingCtrl.create({
              content: 'Updating quantity...',
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
        
                this.http.patch('http://api.riceupfarmers.org/api/cart/update/'+pid+'?qty='+q,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      this.loading.dismissAll();
                     this.navCtrl.setRoot(CartPage);
                   },Error=>{
                      this.loading.dismissAll();
                      this.presentAlert("No Internet Connection!");
                   });
                  
        }else
        {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to "+sa);
        }
    }
    subq(pid,q,sa){
      q -=1;
      if (q>0&&q<=sa) {
        this.loading = this.loadingCtrl.create({
              content: 'Updating quantity...',
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
        
                this.http.patch('http://api.riceupfarmers.org/api/cart/update/'+pid+'?qty='+q,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      this.loading.dismissAll();
                     this.navCtrl.setRoot(CartPage);
                   },Error=>{
                      this.loading.dismissAll();
                      this.presentAlert("No Internet Connection!");
                   });
                  
        }else
        {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to "+sa);
        }
    }
  ionViewDidLoad() {
    let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("passforpost",'any');
             let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
             let option = new RequestOptions({ headers: header });
        this.http.post('http://api.riceupfarmers.org/api/order/new',body,option)
          .map(response => response.json())
          .subscribe(res => {
                  if (res.order_number[0]==undefined) {
                        this.loading.dismissAll();
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
                  }else
                  {
                    var g =res.order_number[0].id;
                  this.orderid = g;
                     this.http.get('http://api.riceupfarmers.org/api/order/'+g,option)
                      .map(response => response.json())
                      .subscribe(rese => {
                          this.orders = rese.product_order;
                        if (this.orders!=undefined) {
                          this.ord = rese.id;
                          this.gtotal=this.gettotal(this.orders);
                          if (this.gtotal!=0)
                            this.gtotal = "P"+this.gtotal;
                          else
                            this.gtotal = 'No Items';
                        }else
                          this.presentAlert("No items in cart!");
                        
                        this.loading.dismissAll();
                      },err =>{ 
                      this.loading.dismissAll();this.presentAlert("No Internet Connection!"); 
                      }); 
                    
                  }
                   
              },err =>{ 
                     this.loading.dismissAll(); this.presentAlert("No Internet Connection!"); 
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
 presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
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
checkthisout() {
  if(this.gtotal != 'No Items'){
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
               
                        this.http.patch('http://api.riceupfarmers.org/api/order/checkout/'+this.orderid+'?shipping_mode=0&order_status=1&remarks=',body,option)
                          .map(response => response.json())
                          .subscribe(res => {
                           // this.alertConfirm2(res.message);
                           this.alertConfirm2(res.message);
                          },Error => {
                             this.presentAlert("Something went wrong!"); 
                          });
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

    codorship(){
          let prompt = this.alertCtrl.create({
        title: 'Select',
        message: 'Type of acquiring the product',
        inputs : [
        {
            type:'radio',
            label:'Pick up',
            value:'pick'
        },
        {
            type:'radio',
            label:'Shipping',
            value:'ship'
        }],
        buttons : [
        {
            text: "Cancel",
            handler: data => {
            }
        },
        {
            text: "Ok",
            handler: data => {
              if (data=='pick') {
                alert('fuck');
              }
            }
        }]});
        prompt.present();
    }

    alertConfirm2(var2:any) {
      let alert = this.alertCtrl.create({
        title: 'Checkout',
        message: var2,
        buttons: [
          {
            text: 'Dismiss',
            handler: () => {
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
            }
          }
        ]
      });
      alert.present();
    }

}
