import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FarmerLocationPage} from '../farmer-location/farmer-location';
import {Http } from '@angular/http';
@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    farmer: any;

    constructor(private http: Http,public navCtrl: NavController, public navParams: NavParams) {
        this.farmer = this.navParams.data;
    }

    openloc(farmer:any)
    {
        this.navCtrl.push(FarmerLocationPage, farmer);
    }

}
