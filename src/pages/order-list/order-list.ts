import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
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
  	 this.http.get('http://localhost/riceup/riceupapi.php?action=getorderall&farmer='+this.GlobalvarsProvider.getgid())
          .map(response => response.json())
          .subscribe(res => this.order = res);
        this.menu.enable(true);  
  }

  
}
