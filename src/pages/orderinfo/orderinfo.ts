import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {PropertyService} from '../../providers/property-service-mock';
import {Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers,RequestOptions} from '@angular/http';

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
	orderno: any;
	orderinfo:any;
  constructor(public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.order = this.navParams.data;       
         
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/order/'+this.order,option)
		          .map(response => response.json())
		          .subscribe(rese => {
		          	this.orderno=rese.order_number;
		          	this.orderinfo = rese.product_order;
		          });
 
}

}
