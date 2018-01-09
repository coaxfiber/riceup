import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {OrderinfoPage} from '../orderinfo/orderinfo';
/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

order:any;
  constructor(public GlobalvarsProvider: GlobalvarsProvider,private menu : MenuController,private http: Http,public navCtrl: NavController, public navParams: NavParams) {
  	    var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/orders',option)
          .map(response => response.json())
          .subscribe(res => {
              this.order = res;
          });
  }
  
  callorderinfo(val: any) {
        this.navCtrl.push(OrderinfoPage, val);
    }
  
}
