import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {PropertyService} from '../../providers/property-service-mock';
import {Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers,RequestOptions} from '@angular/http';

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    property: any;
    quantity:any = "1";
    constructor(public GlobalvarsProvider:GlobalvarsProvider,private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.property = this.navParams.data;      
    }

    openBrokerDetail(broker: any) {
        console.log(broker);
        this.navCtrl.push(BrokerDetailPage, broker);
    }
    addtocart(){
        if (this.quantity>=0&&this.quantity<=this.property.stocks_available) {
             let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
              let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                        
                  let option = new RequestOptions({ headers: header });
        this.http.post('http://api.riceupfarmers.org/api/order/new',body ,option)
          .map(response => response.json())
          .subscribe(res => {

                this.http.post('http://api.riceupfarmers.org/api/cart/add?qty='+this.quantity+'&productid='+this.property.id+'&orderid='+res.order_number[0].id,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                   });
          });
             
                   
        }else
        {
            alert("Quantity must be greater than 0 and less than "+this.property.stocks_available);
        }
    }
}
