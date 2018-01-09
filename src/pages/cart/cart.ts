import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';

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
order_date:any;
orders:any;
gtotal:any;
  constructor(public GlobalvarsProvider: GlobalvarsProvider,private menu : MenuController,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
  	
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
              this.http.get('http://api.riceupfarmers.org/api/order/'+res.order_number[0].id,option)
		          .map(response => response.json())
		          .subscribe(rese => {
		          	this.orders = rese.product_order;
                this.gtotal=this.gettotal(this.orders);
		          });
          });

        
  }

  gettotal(gett:any){
    var total = 0;
    for(var i = 0; i < gett.length ; i++){
        total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
    }
    return total;
  }

  delcart(ids: any){
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
