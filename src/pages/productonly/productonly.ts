import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {Http } from '@angular/http';
/**
 * Generated class for the ProductonlyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-productonly',
  templateUrl: 'productonly.html',
})
export class ProductonlyPage {
	proid:any;
    property: any;
    quantity:any=1;
    constructor(private http: Http,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams) {
        this.property = this.navParams.data.farmer_product;
        console.log(this.property)
        this.proid = this.navParams.data.id;
        this.quantity = this.navParams.data.quantity;
	}
openBrokerDetail(broker: any) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }
}
