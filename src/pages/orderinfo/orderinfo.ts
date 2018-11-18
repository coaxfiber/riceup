import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController,LoadingController, Loading} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers,RequestOptions} from '@angular/http';
import {ProductonlyPage} from '../productonly/productonly';

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
  orders: any;
	orderno: any;
  gtotal:any;
  sdid:any;
  s:any;address:any;mobile:any;
  constructor(public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.loading = this.loadingCtrl.create({
        content: 'Loading Orders...',
      });
      this.loading.present();

        this.order = this.navParams.data;

               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/order/'+this.order,option)
		          .map(response => response.json())
		          .subscribe(rese => {
                this.orderno=rese.order_number;
                this.sdid = rese.sd_id;
                this.s=rese.mode_of_shipping;
		          	this.orders = rese.product_order;
                this.gtotal=this.gettotal(this.orders);
                this.gtotal = "P"+this.gtotal;
                 var header = new Headers();
                            header.append("Accept", "application/json");
                            header.append("Authorization",this.GlobalvarsProvider.gettoken());
                  let option2 = new RequestOptions({ headers: header });
                  this.http.get('http://api.riceupfarmers.org/api/shippingdetail/'+this.sdid,option2)
                        .map(response => response.json())
                        .subscribe(rese => {
                          this.address=rese[0].shipping_address;
                          this.mobile=rese[0].mobile_no;
                         console.log(rese);
                          this.loading.dismissAll();
                        },error=>{
                          this.loading.dismissAll();
                        });

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
}
