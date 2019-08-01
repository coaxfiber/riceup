import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController,LoadingController, Loading} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers,RequestOptions} from '@angular/http';
import {ProductonlyPage} from '../productonly/productonly';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OrderinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-orderinfo',
  templateUrl: 'orderinfo.html',
})
export class OrderinfoPage {
  order: any;
      loading: Loading;
  orders: any=null;
	orderno: any;
  gtotal:any;
  sdid:any;
  s:any;address:any=null;mobile:any=null;
  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        
        this.order = this.navParams.data;
        this.loadorders()

}
loadorders(){
  this.loading = this.loadingCtrl.create({
        content: 'Loading Orders...',
      });
      this.loading.present();


               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/order/'+this.order,option)
              .map(response => response.json())
              .subscribe(rese => {
                console.log(rese)
                this.orderno=rese.order_number;
                this.sdid = rese.sd_id;
                this.s=rese.mode_of_shipping;
                this.orders = rese.product_order;
                this.gtotal=this.gettotal(this.orders);
                this.gtotal = "P"+this.gtotal;
                if (this.s==1) {

                 var header = new Headers();
                            header.append("Accept", "application/json");
                            header.append("Authorization",this.GlobalvarsProvider.gettoken());
                  let option2 = new RequestOptions({ headers: header });
                  this.http.get('http://api.riceupfarmers.com/api/shippingdetail/'+this.sdid,option2)
                        .map(response => response.json())
                        .subscribe(rese => {
                         console.log(rese);
                          this.address=rese[0].shipping_address;
                          this.mobile=rese[0].mobile_no;
                          this.loading.dismissAll();
                        },error=>{
                          this.loading.dismissAll();
                        });
                  // code...
                }

              },error=>{
                this.loading.dismissAll();
              });
 
}
  gettotal(gett:any){
    var total = 0;
    for(var i = 0; i < gett.length ; i++){
        total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
    }
    return total;
  }
  prod(property: any) {
        this.navCtrl.push(ProductonlyPage, property);
    }
   
  cancelprod(ids: any){
    let alert = this.alertCtrl.create({
        title: 'Confirm Remove',
        message: 'Are you sure you want to cancel this ordered product?',
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
               this.loading = this.loadingCtrl.create({
              content: 'Canceling...',
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
                  
                this.http.patch('http://api.riceupfarmers.com/api/product/cancel/'+ids,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      if (data.message!=undefined) {
                       this.presentAlert(data.message);
                       this.loadorders()
                      }else
                      {
                       this.presentAlert("Something went wrong!");

                      }
                      this.loading.dismissAll();
                   },Error=>{
                     this.presentAlert("No Internet Connection!");
                      this.loading.dismissAll();
                   });
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
