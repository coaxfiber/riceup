import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';

import {Http } from '@angular/http';
@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    farmer: any;

    constructor(private http: Http,public navCtrl: NavController, public navParams: NavParams, public service: BrokerService) {
        this.farmer = this.navParams.data;
    }

}
